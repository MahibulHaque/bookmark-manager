import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.css'],
})
export class BookmarkFormComponent {
  bookmarkForm = new FormGroup({
    title: new FormControl(),
    url: new FormControl(),
    category: new FormControl(),
  });
}
