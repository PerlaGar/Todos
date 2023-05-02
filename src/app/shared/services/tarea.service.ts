import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Tarea } from '../interfaces/tarea';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor( private httpService: HttpService) { 

  }

  find(): Observable<Tarea[]>{

    const url: string ='https://jsonplaceholder.typicode.com/todos';
    return this.httpService.get(url);
    //si lo puede extraer correctamente lo dejará pasar 
  }

}
