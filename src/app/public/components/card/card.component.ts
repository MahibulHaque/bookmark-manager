import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bookmark } from '../../types/bookmark';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() category: string = '';
  @Input() bookmarks: Bookmark[] = [];
}