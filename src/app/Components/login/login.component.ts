import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, retry } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private router: Router,private loginService: LoginService){
  }
  Ingresar(){
      console.log(this.usuario)
      const {email, password} = this.usuario;
      this.loginService.login(email,password).then(res => {
      if(res==null){
        console.log("No sirve",res)
      }else{
        console.log("Se Logueo correctamente",res)
        this.router.navigate(['/home']);
      }
    });
    
  }
  ngOnInit(): void {
  }

}
