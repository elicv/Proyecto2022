import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from 'src/productos.model';
import { Observable, take } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private _Auth : AngularFireAuth,private firestore: AngularFirestore, private FirestoreD: Firestore ) {}

  async createcollection(Collection: string, data?: unknown){
    try{
      return  await this.firestore.collection(Collection).add(data);
    }catch(error){
      alert("No se agrego el producto")
      console.log("El error es: " + error)
      return null;
    }

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

    getEmpleados(): Observable<Producto[]> {
      const empleados = collection(this.FirestoreD, 'Productos');
      return collectionData(empleados, { idField: 'id' }) as Observable<Producto[]>
    }

}
