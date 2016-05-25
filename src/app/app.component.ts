/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { RouterActive } from './router-active';
import { SideNavComponent } from './sidenav/sidenav.component';
import { CardDemoComponent } from './carddemo/carddemo.component';
import { InputDemoComponent } from './input/input.component';
import { IconDemoComponent } from './icon/icon.component';
import { ListDemoComponent } from './list/list.component';
import { ToolbarDemoComponent } from './toolbar/toolbar.component';
import { TabGroupDemoComponent } from './tab-group/tab-group.component';
import { CheckboxDemo } from './checkbox/checkbox-demo';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <md-icon (click)="log()">menu</md-icon>
          <span>{{ name }}</span>
          <span class="fill"></span>
          <button md-button router-active [routerLink]=" ['Index'] ">
            Index
          </button>
          <button md-button router-active [routerLink]=" ['Home'] ">
            Home
          </button>
          <button md-button router-active [routerLink]=" ['SideNav'] ">
            SideNav
          </button>
          <button md-button router-active [routerLink]=" ['CardDemo'] ">
            CardDemo
          </button>
          <button md-button router-active [routerLink]=" ['InputDemo'] ">
            Input Demo
          </button>
          <button md-button router-active [routerLink]=" ['IconDemo'] ">
            Icon Demo
          </button>
          <button md-button router-active [routerLink]=" ['ListDemo'] ">
            List Demo
          </button>
          <button md-button router-active [routerLink]=" ['ToolbarDemo'] ">
            Toolbar
          </button>
          <button md-button router-active [routerLink]=" ['TabgroupDemo'] ">
            TabgroupDemo
          </button>
          <button md-button router-active [routerLink]=" ['CheckboxDemo'] ">
            CheckboxDemo
          </button>

          <button md-button router-active [routerLink]=" ['About'] ">
            About
          </button>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <footer>
        <img [src]="angularclassLogo" width="6%">
        WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a>
      </footer>
      </md-content>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/sidenav',  name: 'SideNav',  component: SideNavComponent },
  { path: '/carddemo',  name: 'CardDemo',  component: CardDemoComponent },
  { path: '/inputdemo',  name: 'InputDemo',  component: InputDemoComponent },
  { path: '/icondemo',  name: 'IconDemo',  component: IconDemoComponent },
  { path: '/listdemo',  name: 'ListDemo',  component: ListDemoComponent },
  { path: '/toolbardemo',  name: 'ToolbarDemo',  component: ToolbarDemoComponent },
  { path: '/tabgroupdemo',  name: 'TabgroupDemo',  component: TabGroupDemoComponent },
  { path: '/checkboxdemo',  name: 'CheckboxDemo',  component: CheckboxDemo },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  log() {
    console.log('clicked');
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
