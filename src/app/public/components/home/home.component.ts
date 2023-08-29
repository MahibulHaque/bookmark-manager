import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  groupedBookmarks = [];
  existingCategory: string[] = [];
  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.existingCategory = this.bookmarkService.getAllCategories();
    this.groupedBookmarks =
      this.bookmarkService.getAllBookmarksGroupedByCategory(this.existingCategory);
  }
}
