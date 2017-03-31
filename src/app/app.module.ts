import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // for using NgModel and input tg
import {HeroDetailComponent} from "./hero-detail.component";
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule  // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    /*the declarations array contains a list of application
     components, pipes, and directives that belong to the
     module.A component must be declared in a module before other components can reference it.*/
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:  [ AppComponent ]
})
export class AppModule { }
