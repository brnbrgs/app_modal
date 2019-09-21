import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modalm2',
  templateUrl: './modalm2.page.html',
  styleUrls: ['./modalm2.page.scss'],
})
export class Modalm2Page implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController) {}

  width:any;
  height:any;
  m2:any;

  ngOnInit() {}

  async closeModal() {
    const onClosedData:string = "Fechou!";
    await this.modalController.dismiss(onClosedData);
  }

  async calc(){

    this.m2 = this.width * this.height;
    
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'O resultado é de ' + this.m2.toFixed(2) + 'm²',
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
