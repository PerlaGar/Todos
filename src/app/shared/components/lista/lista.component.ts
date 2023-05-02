import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnChanges{
  @Input() items: any[]=[]
  @Output() seleccion: EventEmitter<any> = new EventEmitter();
  //es un evento pero la informacion que lleva puede ser cualquier cosa y el unico que lo puede ver es el padre

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Se actualizaron los datos', this.items);
  }
  selectItem(item: any){
    console.log('Seleccionaste el item', item);
    this.seleccion.emit(item); 
    //lanzar una instalcia de ese evento 
  }
  
}
