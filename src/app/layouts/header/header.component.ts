import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";

import { ProductoService } from 'src/app/shared/services/producto.service';
import { Producto } from 'src/app/shared/interfaces/producto';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  producto: Producto = {nombre: '', categoria:''}
  loginStatus: boolean= false;
  constructor(private productoServicio: ProductoService,
     private authService: AuthService, private socialAuthService: SocialAuthService,
     private router: Router,){
    this.productoServicio.productoObservable.subscribe(producto => {
      this.producto= producto;
    });
    this.authService.loginStatus.subscribe((status: boolean)=>{
      this.loginStatus= status;
    });
    this.socialAuthService.authState.subscribe(user => {
      if(user){
        console.log('Usuario', user);
      }
    })
  }
  logout(){
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }


}
