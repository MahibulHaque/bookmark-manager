import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private showNewCategory: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}
  submitBookmarkForm(form: FormGroup, showNewCategory: boolean) {
    const formData = form.value;
    const existingBookmarks =
      this?.localStorageService?.getItem('bookmarks') || [];
    const existingCategories =
      this?.localStorageService?.getItem('categories') || [];
    const newCategory = formData?.newCategory?.trim();

    if (newCategory && !existingCategories.includes(newCategory)) {
      existingCategories.push(newCategory);
      this.localStorageService.setItem('categories', existingCategories);
    }

    formData.category = newCategory || formData.category;
    existingBookmarks.push(formData);

    this.localStorageService.setItem('bookmarks', existingBookmarks);
  }

  toggleCategoryControls(form: FormGroup) {
    this.showNewCategory = !this.showNewCategory;

    if (this.showNewCategory) {
      form.get('category')?.disable();
      form.get('newCategory')?.setValidators([Validators.required]);
    } else {
      form.get('category')?.enable();
      form.get('newCategory')?.clearValidators();
    }
    form.get('newCategory')?.updateValueAndValidity();
  }

  getAllCategories(): string[] {
    return this.localStorageService.getItem('categories') || [];
  }

  getAllBookmarksGroupedByCategory(): { [category: string]: any[] } {
    const allBookmarks = this.localStorageService.getItem('bookmarks') || [];
    const groupedBookmarks: { [category: string]: any[] } = {};

    allBookmarks.forEach((bookmark: any) => {
      if (!groupedBookmarks[bookmark.category]) {
        groupedBookmarks[bookmark.category] = [];
      }
      groupedBookmarks[bookmark.category].push(bookmark);
    });

    return groupedBookmarks;
  }
}
