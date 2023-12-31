import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroBookmark } from '@ng-icons/heroicons/outline';

import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { BookmarkModalComponent } from './components/bookmark-modal/bookmark-modal.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { BookmarkDetailsComponent } from './components/bookmark-details/bookmark-details.component';

@NgModule({
  declarations: [PublicComponent, BookmarkFormComponent, PopupModalComponent, BookmarkModalComponent, CardComponent, HomeComponent, BookmarkDetailsComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ heroBookmark }),
  ],
})
export class PublicModule {}
