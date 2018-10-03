import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportsViewPage } from './sports-view';

@NgModule({
  declarations: [
    SportsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SportsViewPage),
  ],
})
export class SportsViewPageModule {}
