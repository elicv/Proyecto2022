import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
import { AgregarProductoComponent } from './Components/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrearcuentaComponent,
    AcercadeComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
