import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})
export class GeneratedTestPage {
  constructor(private nav: NavController, private connectioService: ConnectionService) {

  }

  buscarCep() : void{
    this.connectioService.getCep('78050700')
    .then((res) => {
      let json = res.json();
      console.log(json.localidade);
    }).catch((err) => {
      console.log(err);
    });
  }

}
