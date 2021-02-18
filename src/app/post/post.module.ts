import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule, ScullyLibModule],
})
export class PostModule {}
