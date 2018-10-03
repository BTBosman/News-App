import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Contact } from '../../app/contactArray';
// import ContactArr from '../../app/contactGlobal';
import { ContactViewPage } from '../contact-view/contact-view';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  firstName:string;
  lastName:string;
  email:string;
  comment:string;
  contactArray = [];

  ContactArr = this.contactArray;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  saveComment(firstName,lastName,email,comment){
    if(firstName != "" && lastName != "" && email != "" && comment != ""){
      let con = new Contact(firstName,lastName,email,comment);
      this.contactArray.push(con);

      console.log(this.contactArray);

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  presentModal(a) {
    const modal = this.modalCtrl.create(ContactViewPage,{indx:a});
    console.log(a);
    modal.present();
  }

  remove(i){
    this.contactArray.splice(i,1);
}

update(i,newFirstName,newLastName,newEmail,newComment){

  let oldFirstName = this.contactArray[i].newFirstName;
  let oldLastName = this.contactArray[i].newLastName;
  let oldEmail = this.contactArray[i].newEmail;
  let oldComment = this.contactArray[i].newComment;

  if (newFirstName != null && newLastName != null && newEmail != null && newComment != null ){
    let emp = new Contact(newFirstName,newLastName,newEmail,newComment)
    this.contactArray[i] = emp;
  }
  else if(newFirstName != null){
    let con = new Contact(oldFirstName,newLastName,newEmail,newComment);
    this.contactArray[i] = con;
  }
  else if(newLastName != null){
    let con = new Contact(newFirstName,oldLastName,newEmail,newComment);
    this.contactArray[i] = con;
  }
  else if(newEmail != null){
    let con = new Contact(newFirstName,newLastName,oldEmail,newComment);
    this.contactArray[i] = con;
  }
  else if(newComment != null){
    let con = new Contact(newFirstName,newLastName,newEmail,oldComment);
    this.contactArray[i] = con;
  }
  }

}
