import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { BookmarkModalComponent } from './components/bookmark-modal/bookmark-modal.component';

@NgModule({
  declarations: [PublicComponent, BookmarkFormComponent, PopupModalComponent, BookmarkModalComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}
