import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  groupedBookmarks: { [category: string]: any[] } = {}; // Initialize as an object

  constructor(private bookmarkService: BookmarkService) {}
  
  ngOnInit(): void {
    this.groupedBookmarks =
      (this.bookmarkService.getAllBookmarksGroupedByCategory() ?? {}) as {
        [category: string]: any[];
      };
    console.log(this.groupedBookmarks);
  }
}
