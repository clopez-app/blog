import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogLandingComponent } from './components/blog-landing/blog-landing.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { BlogTagComponent } from './components/blog-tag/blog-tag.component';

@NgModule({
  declarations: [BlogLandingComponent, BlogEntryComponent, BlogTagComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
