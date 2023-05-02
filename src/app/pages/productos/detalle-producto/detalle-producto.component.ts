import { Component,  OnInit} from '@angular/core';
import { Producto } from 'src/app/shared/interfaces/producto';
import { ProductoService } from 'src/app/shared/services/producto.service';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent  implements OnInit{

  constructor(private productoService: ProductoService){}
  producto: Producto = {
    nombre:'',
    categoria:''
  }
  ngOnInit(): void {
    this.producto= this.productoService.getProducto();
  }
}
