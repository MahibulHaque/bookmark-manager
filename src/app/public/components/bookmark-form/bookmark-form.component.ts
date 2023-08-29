import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validUrlFormat } from './validator';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.css'],
})
export class BookmarkFormComponent implements OnInit {
  showNewCategory: boolean = false;
  existingCategories: string[] = [];
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();

  bookmarkForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    url: new FormControl('', [Validators.required, validUrlFormat()]),
    category: new FormControl(''),
    newCategory: new FormControl(''), // Add newCategory FormControl
  });

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.existingCategories = this.bookmarkService.getAllCategories();
  }

  onSubmit() {
    this.bookmarkService.submitBookmarkForm(
      this.bookmarkForm,
      this.showNewCategory
    );
    console.log(this.bookmarkForm.value);
    this.bookmarkForm.reset();

    this.closeModalEvent.emit();
  }

  toggleCategoryControls() {
    this.showNewCategory = !this.showNewCategory;
    this.bookmarkService.toggleCategoryControls(this.bookmarkForm);
  }

}
