import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ["Iroman","Spiderman","Hulk","Thor"];
  public heroeBorrado?: string = "";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift();
  }
  
}
