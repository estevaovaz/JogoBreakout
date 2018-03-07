import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { CadastrarPage } from '../cadastrar/cadastrar';


@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  alert(message: string ) {
    this.alertCtrl.create({
      title: 'Info!',
     subTitle: message,
     buttons: ['OK']

    }).present();
  }

  goHome() {

    this.navCtrl.push(HomePage)
  }

  goAtualiza() {
    this.navCtrl.push(CadastrarPage)
  }
  addCadastrado() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,
      this.password.value)
      // validando o cadastro por email e senha
      .then(data => {
        console.log('Tem dados', data);
        this.alert('Cadastrado!');
        this.navCtrl.push(HomePage);
      })
      .catch (error => {
        console.log('Ocorreu um erro', error);
        this.alert(error.message);
      });

    console.log('Email cadastrado!',
    this.user.value,
   this.password.value);
   }
}
