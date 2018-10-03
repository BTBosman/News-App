import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

/**
 * Generated class for the TopStoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-stories',
  templateUrl: 'top-stories.html',
})
export class TopStoriesPage {
  article1;
  img ;
  arr =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private news:NewsProvider,public modalCtrl: ModalController) {
    this.news.getLatest().then((data:any) => {
      console.log(data);
     
      this.img =data.articles[1].urlToImage;
      console.log(this.img);  
     
      for(var i = 2 ;i <= 7;i++){
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
      
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopStoriesPage');
  }

  // presentModal(a) {
  //   const modal = this.modalCtrl.create(TopS,{indx:a});
  //   console.log(a);
  //   modal.present();
  // }

}
