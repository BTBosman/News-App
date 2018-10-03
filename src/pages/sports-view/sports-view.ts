import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the SportsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports-view',
  templateUrl: 'sports-view.html',
})
export class SportsViewPage {

  article1;
  img;
  arr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private news: NewsProvider) {
    this.news.getNews("sports").then((data:any) => {
      console.log(data);
    
      this.img =data.articles[0].urlToImage;
      console.log(this.img);  
  
      for(var i =this.navParams.get("indx");i <=this.navParams.get("indx") ;i++){
      
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
   
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
