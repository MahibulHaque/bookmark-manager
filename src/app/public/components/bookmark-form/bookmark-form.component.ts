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
  });

  onSubmit() {
    console.log(this.bookmarkForm.value);
  }
}
