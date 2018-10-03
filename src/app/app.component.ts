import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TopStoriesPage } from '../pages/top-stories/top-stories';
import { WorldNewsPage } from '../pages/world-news/world-news';
import { SportsNewsPage } from '../pages/sports-news/sports-news';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import {StartPage} from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;

  pages: Array<{title: string, component: any,icon?:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Latest News', component: HomePage, icon:"md-home" },
      // { title: 'List', component: ListPage },
      { title: 'Top Stories', component: TopStoriesPage,icon:"md-paper"},
      { title: 'Entertainment', component: WorldNewsPage,icon:"md-tv" },
      { title:'Sports News', component: SportsNewsPage,icon:"md-ball" },
      { title:'Contact Us', component: ContactUsPage, icon:"md-mail"}
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
