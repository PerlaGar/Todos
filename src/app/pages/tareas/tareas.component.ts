import { Component, OnInit } from '@angular/core';

import { Tarea } from 'src/app/shared/interfaces/tarea';
import {TareaService} from 'src/app/shared/services/tarea.service'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[] =[]; 
// asi se inyecta un servicio 
  constructor (private tareaService: TareaService){ 
    // ya es una propiedad y se puede acceder desde otra funcion
  }
//se inicializa y ve por las tareas 
  ngOnInit(): void {
    this.traerTareas();
  }
  traerTareas(){
    this.tareaService.find().subscribe(res =>{
      this.tareas= res;
    });
  }
}
