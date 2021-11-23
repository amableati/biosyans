import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ContactComponent,
    HomeComponent,
    UnknownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
