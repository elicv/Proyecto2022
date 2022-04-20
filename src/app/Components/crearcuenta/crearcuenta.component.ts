import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }
  constructor(private router: Router,private loginService: LoginService){
  }
  Ingresar(){
      console.log(this.usuario)
      const {email, password} = this.usuario;
      this.loginService.registro(email,password).then(res => {

      if(res==null){
        console.log("No sirve",res)
      }else{
        console.log("Se Resgistro correctamente",res)
        alert("Se creo el usuario correctamente!!!")
        this.router.navigate(['/home']);
      }
    });
  }
  volver(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
