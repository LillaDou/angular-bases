import { Component, computed, signal } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";


interface Character {
  id: number; 
  name: string; 
  power: number;
}


@Component({
  imports: [
    // NgClass
  ],
  templateUrl: './dragonball-page.html',
})
export class DragonballPageComponent {

//La señal es de tipo Character con un arreglo
  characters = signal<Character[]>( [
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ] ); 

  //? Ejemplo de señal computada usada para el ngClass en el html
  // powerClasses = computed( () => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

}
