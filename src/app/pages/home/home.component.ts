import { Component, OnInit } from '@angular/core';
import {Tarea} from 'src/app/shared/interfaces/tarea'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cargando:boolean=true;

    tarea: Tarea= {
    titulo: '',
    descripcion:'',
    status:'new'
  };
  //tareas:Tarea[] = [];
  tareas: Array<Tarea> = [];

  titulo: string= '';

  constructor(){
    console.log('Constructor');
  }
  ngOnInit(): void {
    console.log('Listo para iniciar la petición')
    this.getTareas();
  }
  getTareas(): void{
    setTimeout(()=>{ //funcion de felcha para estar en el mismo contexto y poder me traer tareas
      this.tareas =[
        {
          titulo: 'Tarea 1',
          descripcion: 'Lorem ipsum 1',
          status: 'new'
        },
        {
          titulo: 'Tarea 2',
          descripcion: 'Lorem ipsum 2',
          status: 'in progress'
        }
      ]
      this.cargando= false;
    },1000);
  }
  newTarea(): void{
    //const clone= Object.assign({}, this.tarea);
    this.tareas.push({
      ...this.tarea
    });
    this.tarea.titulo='';
  }
  setTitulo(e: Event): void{
    this.tarea.titulo = (e.target as HTMLInputElement).value;
  }
}
