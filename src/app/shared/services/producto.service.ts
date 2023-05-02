import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //disparar el nuevo valor 
  productoObservable: BehaviorSubject<Producto> //= new BehaviorSubject({});

  productoSeleccionado: Producto={
    nombre:'',
    categoria:''
  }
  constructor() {
    this.productoObservable = new BehaviorSubject(this.productoSeleccionado);
   }


  setProducto(producto: Producto): void{
    this.productoSeleccionado= producto;
    this.productoObservable.next(producto);
    //dispara todas las funciones que se han subscrito

  }

  getProducto(): Producto{
    return this.productoSeleccionado;
  }
}
