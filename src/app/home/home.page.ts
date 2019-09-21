import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';
import { Modalm2Page } from 'src/app/modalm2/modalm2.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async openModalIMC(){
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  async openModalM2(){
    const modal = await this.modalController.create({
      component: Modalm2Page
    });
    return await modal.present();
  }
  
}
