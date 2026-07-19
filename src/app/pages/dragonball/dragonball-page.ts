import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number; 
  name: string; 
  power: number;
}


@Component({
  imports: [
  ],
  templateUrl: './dragonball-page.html',
  })
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

//La señal es de tipo Character con un arreglo
  characters = signal<Character[]>( [
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
    // { id: 4, name: 'Yamcha', power: 500 },

  ] ); 

  //? Ejemplo de señal computada usada para el ngClass en el html
  // powerClasses = computed( () => {
  //   return {
  //     'text-danger': true,
  //   }
  // })

  addCharacter() {
    if ( !this.name() || !this.power || this.power() <= 0 ) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters().push(newCharacter);
    // Esta es una forma de poder añadir el personaje nuevo a nuestro arreglo de characters. Funciona. Sin embargo,
    // no deberíamos usar el .push() cuando estamos cambiando el valor de una señal. 

    this.characters.update( (list) => [... list, newCharacter] );
    // Utilizamos el update porque queremos actualizar el valor de la señal. Dentro, añadimos la función que retorna
    // nuestra lista original + el newCharacter

    this.resetFields();
  }

  //Creamos esta función para resetear las cajas de texto después de añadir un personaje nuevo
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
