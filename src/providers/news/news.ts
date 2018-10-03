import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(cat){
    let apikey ="https://newsapi.org/v2/top-headlines?country=us&category="+cat+"&apiKey=bc89d01e8e0a4102b73f1177296da6f8";
       return new Promise ((resolve, reject) => {
         this.http.get(apikey ).subscribe(data =>{
            resolve(data);
         })
       
       
      });
   
     } 

     getLatest(){
       let apiKey = "https://newsapi.org/v2/top-headlines?sources=news24&apiKey=d5a431507fe7490dbfc5d23817c24a52";
       return new Promise ((resolve, reject) => {
        this.http.get(apiKey ).subscribe(data =>{
           resolve(data);
        })
      
      
     });
     }
}
