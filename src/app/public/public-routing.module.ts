import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';

const routes: Routes = [
  {path:'', component:PublicComponent},
  {path:'home', component:BookmarkFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
