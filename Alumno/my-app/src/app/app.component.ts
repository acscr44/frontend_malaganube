import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // la etiqueta raíz o padre . id del component / hook, punto de anclaje.
  templateUrl: './app.component.html',  // su html
  styleUrls: ['./app.component.css']  // su css
})
export class AppComponent {
  title = 'my-app';
  // Aquí va el JAVASCRIPT - la funcionalidad del componente.
  constructor()
  {
    console.log("Estamos en el constructor del APP component")
  }

}
