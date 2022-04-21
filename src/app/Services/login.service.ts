import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _Auth : AngularFireAuth,private firestore: AngularFirestore ) {}
  
  createcollection(collection, dato){
    this.firestore.collection(collection,dato)
  }

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
    this._Auth.signOut();
  }
}
