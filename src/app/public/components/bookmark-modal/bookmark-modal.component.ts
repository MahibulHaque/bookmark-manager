import { Component, ViewChild } from '@angular/core';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-bookmark-modal',
  templateUrl: './bookmark-modal.component.html',
  styleUrls: ['./bookmark-modal.component.css'],
})
export class BookmarkModalComponent {
  @ViewChild(PopupModalComponent) bookmarkModal!: PopupModalComponent;
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
