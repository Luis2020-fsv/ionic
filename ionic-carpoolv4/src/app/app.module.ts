/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { TabsPageModule } from './tabs/tabs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmDirectionModule } from 'agm-direction';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { StopoverlocationComponent } from './stopoverlocation/stopoverlocation.component';
import { ChattingComponent } from './chatting/chatting.component';
import { Camera } from '@ionic-native/camera/ngx';

var CREDENTIALS = {
  apiKey: "AIzaSyCUA3qsXurVe0xN2f_fLDCnVHZvGa3ahBM",
  authDomain: "ruedacar-9ce2a.firebaseapp.com",
  databaseURL: "https://ruedacar-9ce2a.firebaseio.com",
  projectId: "ruedacar-9ce2a",
  storageBucket: "ruedacar-9ce2a.appspot.com",
  messagingSenderId: "1052173203992",
  appId: "1:1052173203992:web:1f147d8680536ff07b616d"

  };

@NgModule({
  declarations: [AppComponent, StopoverlocationComponent, ChattingComponent],
  entryComponents: [StopoverlocationComponent, ChattingComponent],
  schemas: [NO_ERRORS_SCHEMA],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, TabsPageModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAP_Xy-1QSclKYAvxSmAZO2BuFAWWAlOZQ',
      libraries: ['places']
    }),
    ReactiveFormsModule,
    AgmDirectionModule,
    Ionic4DatepickerModule,
    AngularFireModule.initializeApp(CREDENTIALS),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
