import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Token } from 'src/app/shared/interfaces/token';
import { LoginService } from 'src/app/shared/services/login.service';
import { Credenciales } from 'src/app/shared/interfaces/credenciales';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  credenciales: Credenciales ={
    email: '',
    password: ''
   }
  constructor (private loginService: LoginService,
     private authService: AuthService, 
     private router: Router
     ){}

  inciarsesion(){
    this.loginService.login(this.credenciales).subscribe((response: Token) => {
      this.authService.setToken(response.token); //se guardo
      this.router.navigate(['/']);
    });
  }

 
}
