import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
  constructor() { 
    const existe= this.tokenExists();
    this.loginStatus.next(existe);
  }
  //guardar el token en local storage
  setToken(token: string){
    localStorage.setItem('token', token);
    this.loginStatus.next(true);
  }

  getToken(): string{
    return localStorage.getItem('token') || ''; //'' es un  valor falso 
  }

  clearToken(){
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  //¿existe el token? ¿inicio sesión?
  tokenExists(): boolean{
    return this.getToken() ? true : false; 
  }

}
