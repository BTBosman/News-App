import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { SportsViewPage } from '../sports-view/sports-view';

/**
 * Generated class for the SportsNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports-news',
  templateUrl: 'sports-news.html',
})
export class SportsNewsPage {

  article1;
  img;
  arr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,private news:NewsProvider,public modalCtrl: ModalController) {
    this.news.getNews("sports").then((data:any) => {
      console.log(data);
     
      this.img =data.articles[1].urlToImage;
      console.log(this.img);  
     
      for(var i = 0 ;i <= 5;i++){
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
      
     
     })
  }

  presentModal(a) {
    const modal = this.modalCtrl.create(SportsViewPage,{indx:a});
    console.log(a);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsNewsPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
