import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLandingComponent } from './components/blog-landing/blog-landing.component';

const routes: Routes = [
  {
    path: '',
    component: BlogLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
