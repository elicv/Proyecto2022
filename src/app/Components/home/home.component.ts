import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  data = {
    id: 'a',
    comida: '1'
  }

  listaUsuarios: Array<unknown> = [];

  productos: productos[] = [];
  

  constructor(private router: Router, private loginService: LoginService) {}

  volver() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  altausuario() {
    this.loginService.createcollection('Ciudad', this.data);
    
  }

  ngOnInit(): void {

  }
}
