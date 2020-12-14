import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogLandingComponent } from './components/blog-landing/blog-landing.component';

const routes: Routes = [
  {
    path: '',
    component: BlogLandingComponent,
  },
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class BlogRoutingModule {}
