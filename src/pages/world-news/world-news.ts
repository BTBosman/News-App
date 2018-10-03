import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';


/**
 * Generated class for the WorldNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-world-news',
  templateUrl: 'world-news.html',
})
export class WorldNewsPage {
  article1;
  img ;
  title;
  arr =[];
  description1;
  url;

  img2;
  title2;
  description2;
  url2;

  img3;
  title3;
  description3;
  url3;


  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private news:NewsProvider) {
    this.news.getNews("entertainment").then((data:any) => {
      console.log(data);
    
      //slide1
      this.img = data.articles[0].urlToImage;
      console.log(this.img);  


      this.description1 = data.articles[0].description;
      console.log(this.description1);
      
      this.title = data.articles[0].title;
      console.log(this.title);

      this.url = data.articles[0].url;
      console.log(this.url);

      //slide2
      this.img2 = data.articles[1].urlToImage;
      console.log(this.img2);  

      this.description2 = data.articles[1].description;
      console.log(this.description2);
      
      this.title2 = data.articles[1].title;
      console.log(this.title2);

      this.url2 = data.articles[1].url;
      console.log(this.url2);

        //slide3
        this.img3 = data.articles[2].urlToImage;
        console.log(this.img3);  
  
        this.description3 = data.articles[2].description;
        console.log(this.description3);
        
        this.title3 = data.articles[2].title;
        console.log(this.title3);

        this.url3 = data.articles[2].url;
        console.log(this.url3);  
  
      for(var i =this.navParams.get("indx");i <=this.navParams.get("indx") ;i++){
      
        this.arr.push(data.articles[i]);
        console.log(this.article1);
      }
   
    })

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldNewsPage');
  }

}
