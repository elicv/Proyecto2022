import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

import { Producto } from 'src/productos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  productos: Producto[] = [];  

  constructor(private router: Router, private loginService: LoginService) {}

  volver() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  getEmpleados() {
    this.loginService.getEmpleados().subscribe((res: Producto[]) => {
      this.productos = res;
    });
  }

  ngOnInit(): void {
    this.getEmpleados();
  }
}
