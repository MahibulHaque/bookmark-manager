import { Component, Input } from '@angular/core';
import { Bookmark } from '../../types/bookmark';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css'],
})
export class BookmarkDetailsComponent {
  @Input() bookmark!: Bookmark;
  constructor(
    private sanitizer: DomSanitizer,
    private sharedService: SharedService
  ) {}
  sanitizeUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  selectedBookmark!: Bookmark;

  ngOnInit() {
    this.sharedService.selectedBookmark$.subscribe((bookmark) => {
      if (bookmark) {
        console.log(bookmark);
        this.selectedBookmark = bookmark;
      }
    });
  }
}
