import { Component, Input } from '@angular/core';
import { Bookmark } from '../../types/bookmark';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() category: string = '';
  @Input() bookmarks: Bookmark[] = [];
  constructor(private sanitizer: DomSanitizer, private sharedService: SharedService) {}
  sanitizeUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  showDetails(bookmark:Bookmark) {
    this.sharedService.setSelectedBookmark(bookmark);
  }
}
