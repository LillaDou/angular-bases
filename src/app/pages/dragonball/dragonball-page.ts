import { Component, signal } from '@angular/core';


interface Character {
  id: number; 
  name: string; 
  power: number;
}


@Component({
  imports: [],
  templateUrl: './dragonball-page.html',
})
export class DragonballPageComponent {

//La señal es de tipo Character con un arreglo
  characters = signal<Character[]>( [
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ] ); 

  

}
