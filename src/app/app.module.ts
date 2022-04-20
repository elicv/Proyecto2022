import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CrearcuentaComponent } from './Components/crearcuenta/crearcuenta.component';
import { AcercadeComponent } from './Components/acercade/acercade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrearcuentaComponent,
    AcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
