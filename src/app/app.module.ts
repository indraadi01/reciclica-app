import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from 'src/store/AppStoreModule';
<<<<<<< HEAD
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';
import { AngularFireModule } from '@angular/fire/compat';
=======
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingComponent } from './components/loading/loading.component';
import { AngularFireModule } from '@angular/fire/compat'
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
<<<<<<< HEAD
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AppRoutingModule, 
    ...AppStoreModule, 
    StoreDevtoolsModule.instrument({maxAge: 25})],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule, ...AppStoreModule, StoreDevtoolsModule.instrument({maxAge: 25})],
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
