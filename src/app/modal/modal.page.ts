import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  peso:any;
  altura:any;
  imc:any;
  response:any;

  constructor(public modalController: ModalController, public alertController: AlertController) {}

  ngOnInit() {
  }
  
  async closeModal() {
    const onClosedData:string = "Fechou!";
    await this.modalController.dismiss(onClosedData);
  }

  async enviaDados(){

    this.imc = this.peso / (this.altura * this.altura);

    if(this.imc <= 20) {
      this.response = 'baixo peso';
    } else if(this.imc >= 20 && this.imc <= 24) {
      this.response = 'peso normal';
    } else if(this.imc >= 24.1 && this.imc <= 29) {
      this.response = 'sobrepeso';
    } else if(this.imc >= 29.1 && this.imc <= 34.9) {
      this.response = 'obesidade';
    } else if(this.imc >= 35) {
      this.response = 'obesidade mórbida';
    } 
    
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Seu resultado de IMC foi de ' + this.imc.toFixed(2),
      message: 'Isso significa que você está com ' + this.response,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.closeModal();
          }
        }
      ]
    });

    await alert.present(); 

  }

}
