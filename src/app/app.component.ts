import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citas';
  listCitas:any[]=[];
  agregarCita(cita:any){
    console.log('soy el padre')
    console.log(cita)
    this.listCitas.push(cita)
    console.log(this.listCitas)
  }
  eliminarCi(i:number){
    this.listCitas.splice(i,1)
  }
}
