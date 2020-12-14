import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [HomeComponent, WhoAmIComponent, ContactComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
