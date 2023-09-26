import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos= [
    {
      nombre:'Juan',
      carrera:'Economia',
      legajo:101
    },
    {
      nombre:'Anabella',
      carrera:'Economia',
      legajo:102
    },
    {
      nombre:'Eugenio',
      carrera:'Economia',
      legajo:103
    },

  ]
}
