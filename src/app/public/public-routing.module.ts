import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { BookmarkModalComponent } from './components/bookmark-modal/bookmark-modal.component';

const routes: Routes = [
  {path:'', component:PublicComponent},
  {path:'home', component:BookmarkModalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
