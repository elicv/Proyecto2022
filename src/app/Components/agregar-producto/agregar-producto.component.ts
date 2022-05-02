import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

import { Producto } from 'src/productos.model';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  imagen: any [] = [];

  producto: Producto = {
    nombre: '',
    precio: '',
    descripcion: '',
    img64 : ''
  }


  volver() {
    this.router.navigate(['/login']);
  }

  subirProducto(){
    this.loginService.createcollection("Productos", this.producto).then(res => {
      if(res==null){
        console.log("No sirve",res)
      }else{
        alert("No se agrego el producto")
        this.router.navigate(['/home']);
      }
    });
  }

  CargarIMG(event:any){
      this.imagen = [];
      let imagen= event.target.files;
      let reader= new FileReader();
      reader.readAsDataURL(imagen[0]);
      reader.onloadend= () => {
        this.imagen.push(reader.result);
        this.producto.img64 = reader.result;
        console.log(reader.result)
      }
  }

  ngOnInit(): void {

  }

}
