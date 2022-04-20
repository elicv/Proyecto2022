import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _Auth : AngularFireAuth ) {}

  async login(email:string , password: string){
    try{
        return  await this._Auth.signInWithEmailAndPassword(email,password);
    }catch(error){
      alert("No se puedo loguear")
      console.log("El error es: " + error)
      return null;
    }
  }

  async registro(email:string , password: string){
    try{
        return  await this._Auth.createUserWithEmailAndPassword(email,password);
    }catch(error){
      alert("No se puedo crear usuario, verificar email o contraseña")
      console.log("El error es: " + error)
      return null;
    }
  }

  getUserLogged(){
    return this._Auth.authState;
  }

  logout(){
    localStorage.removeItem('haroldrm12@gmail.com');
    this._Auth.signOut();
  }
}
