import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validUrlFormat } from './validator';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.css'],
})
export class BookmarkFormComponent {
  bookmarkForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    url: new FormControl('', [Validators.required, validUrlFormat()]),
    category: new FormControl(''),
    newCategory: new FormControl(''), // Add newCategory FormControl
  });

  showNewCategory: boolean = false; // Add showNewCategory flag

  onSubmit() {
    console.log(this.bookmarkForm.value);
  }

  toggleCategoryControls() {
    this.showNewCategory = !this.showNewCategory;
    if (this.showNewCategory) {
      this.bookmarkForm?.get('category')?.disable();
      this.bookmarkForm
        ?.get('newCategory')
        ?.setValidators([Validators.required]);
    } else {
      this.bookmarkForm?.get('category')?.enable();
      this.bookmarkForm?.get('newCategory')?.clearValidators();
    }
    this.bookmarkForm?.get('newCategory')?.updateValueAndValidity();
  }
}
