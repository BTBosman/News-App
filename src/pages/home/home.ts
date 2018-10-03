import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { HomeViewPage } from '../home-view/home-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  article1;
  img;
  arr = [];

  constructor(public navCtrl: NavController,private news:NewsProvider, public modalCtrl:ModalController) {
    this.news.getNews(" ").then((data:any) => {
      console.log(data);
     
      this.img =data.articles[1].urlToImage;
      console.log(this.img);  
     
      for(var i = 0 ;i <= 1;i++){
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
     })
  }

  presentModal(a) {
    const modal = this.modalCtrl.create(HomeViewPage,{indx:a});
    console.log(a);
    modal.present();
  }

 
 
}
