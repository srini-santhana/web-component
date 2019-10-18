MicroApps using Angular Elements
--------------------------------
 

Step-1:
 

Creates new Angular application

 

ng new heroes

 

Step-2:
 

Add Angular Elements - which supports CustomElements

ng add @angular/elements

npm i @webcomponents/custom-elements --save

Import those packages into polyfills.ts file:

import "@webcomponents/custom-elements/src/native-shim";

import "@webcomponents/custom-elements/custom-elements.min";



Step-3
 

Create a component 'heroes'

 

ng generate component heroes

 

Step-4
 

Build component

 

Display heroes

 

Step-5

 

Convert to Angular Component to Web Component

 

import { BrowserModule } from '@angular/platform-browser';

import { NgModule , Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';


@NgModule({

    declarations: [ AppComponent, HeroesComponent ],

    imports: [ BrowserModule ],

    providers: [], bootstrap: [HeroesComponent]

})


export class AppModule {

    constructor(private injector: Injector) {

      this.ngDoBootstrap();

    }

    ngDoBootstrap() {

        const el = createCustomElement(HeroesComponent, { injector: this.injector });         

    customElements.define('my-heroes', el);

}

 

Step-6
 

Use the component within Angular App

 

Index.html
<body>
  <app-root></app-root>
  <my-heroes></my-heroes>
</body>
 

Step-7
------

npm install --save-dev concat fs-extra

 
Using the component outside Angular App Build & deploy
 
const fs = require('fs-extra');

const concat = require('concat');

(async function build() {

   const files =

       [ './dist/heroes/runtime.js',

         './dist/heroes/polyfills.js',

         './dist/heroes/scripts.js',

         './dist/heroes/main.js', ]

await fs.ensureDir('heroes')

await concat(files, 'heroes/heroes.js');

await fs.copyFile('./dist/heroes/styles.css', 'heroes/styles.css')

})()


ng build heroes --prod --output-hashing none && node build-elements.js

Step-8
------


