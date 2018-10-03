import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeViewPage } from './home-view';

@NgModule({
  declarations: [
    HomeViewPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeViewPage),
  ],
})
export class HomeViewPageModule {}
