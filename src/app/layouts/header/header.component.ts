import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";

import { ProductoService } from 'src/app/shared/services/producto.service';
import { Producto } from 'src/app/shared/interfaces/producto';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
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
     private router: Router,private loginService: LoginService){
    this.productoServicio.productoObservable.subscribe(producto => {
      this.producto= producto;
    });
    this.authService.loginStatus.subscribe((status: boolean)=>{
      this.loginStatus= status;
    });
    //
    this.socialAuthService.authState.subscribe(user => {
      if(user){
        console.log('Usuario', user);
        //validar idToken en el api
        this.loginService.googleLogin(user).subscribe({
          next: (response) => {
            this.authService.setToken(response.token);
            //cambiamos de componente y lo eviamos al componenete principal
            this.router.navigate(['/']);
          },
          error: (error) =>{}
        })
      }
    })
  }
  logout(){
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }


}
