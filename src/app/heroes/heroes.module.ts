import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //Modulos que se podrán ver dentro de la solución
        ListadoComponent
    ],
    imports:[ //Aquí van modulos.
        CommonModule
    ]
})

export class HeroesModule{

}