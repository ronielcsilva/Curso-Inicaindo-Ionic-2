import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {MenuTestePage} from './pages/menu-teste/menu-teste';
import {GeneratedTestPage} from './pages/generated-test/generated-test';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages:Array<{Component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {

    this.pages = [
      {Component: HomePage, title: "Home", icon: "home"},
      {Component: MenuTestePage, title: "Menu teste", icon: "menu"},
      {Component: GeneratedTestPage, title: "Generated Page", icon: "home"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  	openPage(page: any, menuSide: string) : void{
      this.rootPage = page.Component;
      this.menuCtrl.close(menuSide);
    }

    menuOpened() : void{
      console.log('Aberto');
    }

}

ionicBootstrap(MyApp, [],{
  menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
});
