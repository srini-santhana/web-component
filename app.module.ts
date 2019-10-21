import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [HeroesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent, HeroesComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.ngDoBootstrap();
  }
  ngDoBootstrap() {
    const el = createCustomElement(HeroesComponent, { injector: this.injector });
    customElements.define('my-heroes', el);
  }
}
