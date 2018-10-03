import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Contact } from '../../app/contactArray';
// import ContactArr from '../../app/contactGlobal';
/**
 * Generated class for the ContactViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-view',
  templateUrl: 'contact-view.html',
})
export class ContactViewPage {
    
  firstName:string;
  lastName:string;
  email:string;
  comment:string;
  contactArray = [];
  ContactArr = this.contactArray;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }
  load(firstName,lastName,email,comment){
      let con = new Contact(firstName,lastName,email,comment);
      this.contactArray.push(con);
  
      console.log(this.contactArray);
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

 

}
