import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { CrearcuentaComponent } from'./Components/crearcuenta/crearcuenta.component';
import {AcercadeComponent} from './Components/acercade/acercade.component';

import { AgregarProductoComponent } from './Components/agregar-producto/agregar-producto.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'Agregar', component: AgregarProductoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'crearcuenta', component: CrearcuentaComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
