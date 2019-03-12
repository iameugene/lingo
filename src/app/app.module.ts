import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AngularMaterialModule } from './angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AunitComponent } from './aunit/aunit.component';
import { AunitsListComponent } from './aunits-list/aunits-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage'

@NgModule({
  declarations: [
    AppComponent,
    AunitComponent,
    AunitsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBg4LZF4dc7Bx2QGKIsz-L_LrD-dY4Nmac",
      authDomain: "aunit-ff8d1.firebaseapp.com",
      databaseURL: "https://aunit-ff8d1.firebaseio.com",
      projectId: "aunit-ff8d1",
      storageBucket: "aunit-ff8d1.appspot.com",
      messagingSenderId: "681478036523"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
