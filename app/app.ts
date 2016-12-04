import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {MenuTestePage} from './pages/menu-teste/menu-teste';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages:Array<{Component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform) {

    this.pages = [
      {Component: HomePage, title: "Home", icon: "home"},
      {Component: MenuTestePage, title: "Menu teste", icon: "menu"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  	openPage(page: any) : void{
      this.rootPage = page.Component;
    }

}

ionicBootstrap(MyApp);
