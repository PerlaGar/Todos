import { Component, OnInit} from '@angular/core';

import { Producto } from 'src/app/shared/interfaces/producto'
import { ProductoService } from 'src/app/shared/services/producto.service';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.scss']
})
export class ListarProductoComponent {

  constructor(private productoService: ProductoService){}

  producto: Producto= {
    nombre:'',
    categoria: ''
  }
  productos: Producto[]=[
    {
      id:1,
      nombre: 'Peras',
      categoria: 'comidas'
    },
    {
      id:2,
      nombre: 'Vino',
      categoria: 'bebida'
    },
    {
      id:3,
      nombre: 'Manzanas',
      categoria: 'comidas'
    }
  ]
  ngOnInit(): void{/*
    setTimeout(() =>{
      this.productos = [{
        nombre: 'Agua',
        categoria: 'bebidas'
      }]
    }, 500);*/
  }
  mostrarItem(producto: Producto){
    this.producto = producto;
    this.productoService.setProducto(producto);
  }


}

