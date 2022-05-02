import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { Producto } from 'src/productos.model';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  imagen: any [] = [];

  producto: Producto = {
    nombre: '',
    precio: '',
    descripcion: '',
    img64 : ''
  }


  volver() {
    this.router.navigate(['/home']);
  }

  modificarProducto(){
    
  }


  Consultar(){

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

}
