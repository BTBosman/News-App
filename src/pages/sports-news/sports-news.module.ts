import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportsNewsPage } from './sports-news';

@NgModule({
  declarations: [
    SportsNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(SportsNewsPage),
  ],
})
export class SportsNewsPageModule {}
