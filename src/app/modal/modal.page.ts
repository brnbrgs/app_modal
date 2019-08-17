import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  peso:any;
  altura:any;
  imc:any;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  async closeModal() {
    const onClosedData:string = "Fechou!";
    await this.modalController.dismiss(onClosedData);
  }

  async enviaDados(){

    this.imc = this.peso / (this.altura * this.altura);
    console.log(this.imc);

  }

}
