import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { BlogLandingComponent } from './components/blog-landing/blog-landing.component';
import { BlogTagComponent } from './components/blog-tag/blog-tag.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogEntryComponent,
    BlogLandingComponent,
    BlogTagComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, SharedModule],
})
export class BlogModule {}
