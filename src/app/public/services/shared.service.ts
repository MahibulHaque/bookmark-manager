// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bookmark } from '../types/bookmark';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedBookmarkSubject = new BehaviorSubject<Bookmark | null>(null);
  selectedBookmark$ = this.selectedBookmarkSubject.asObservable();

  setSelectedBookmark(bookmark: Bookmark) {
    this.selectedBookmarkSubject.next(bookmark);
  }
}
