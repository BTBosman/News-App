import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the HomeViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-view',
  templateUrl: 'home-view.html',
})
export class HomeViewPage {
  
img;
article1;
arr=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,private news: NewsProvider) {
    this.news.getNews("").then((data:any) => {
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
    console.log('ionViewDidLoad HomeViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
