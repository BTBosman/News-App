import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorldNewsPage } from './world-news';

@NgModule({
  declarations: [
    WorldNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorldNewsPage),
  ],
})
export class WorldNewsPageModule {}
