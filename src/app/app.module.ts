import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { TopStoriesPage } from '../pages/top-stories/top-stories';
import { WorldNewsPage } from '../pages/world-news/world-news';
import { SportsNewsPage } from '../pages/sports-news/sports-news';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import {HttpClientModule} from '@angular/common/http';
import { HomeViewPage } from '../pages/home-view/home-view';
import { SportsViewPage } from '../pages/sports-view/sports-view';
import { StartPage } from '../pages/start/start';
import { ContactViewPage } from '../pages/contact-view/contact-view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TopStoriesPage,
    WorldNewsPage,
    SportsNewsPage,
    ContactUsPage,
    HomeViewPage,
    SportsViewPage,
    StartPage,
    ContactViewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TopStoriesPage,
    WorldNewsPage,
    SportsNewsPage,
    ContactUsPage,
    HomeViewPage,
    SportsViewPage,
    StartPage,
    ContactViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider
  ]
})
export class AppModule {}
