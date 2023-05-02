import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { Credenciales } from '../interfaces/credenciales';
import { Token } from '../interfaces/token';
//siempre 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  

  login(credenciales: Credenciales): Observable<Token> {
    return this.httpClient.post<Token>(environment.apiUrl + '/login',credenciales);
    
  }

}
