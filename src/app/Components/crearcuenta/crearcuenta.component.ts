import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

  constructor(private router: Router) { }

  volver(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
