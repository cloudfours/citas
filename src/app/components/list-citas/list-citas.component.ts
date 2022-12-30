import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
@Input() listaCitas:any;
@Output() deleteCita=new EventEmitter<number>()
eliminarCita(i:number){
this.deleteCita.emit(i)
}
}
