import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';


//El injectable es un decorador que transforma la clase en un servicio. Por norma general
//tiene el providedIn en el root. De esta manera el servicio está a nivel global de la
//aplicación que tenemos
@Injectable({providedIn: 'root'})
export class DragonballService {
    
  characters = signal<Character[]>( [
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ] ); 


  //Un efecto nos va a permitir disparar un efecto o "acción secundaria"
  //Es una función que recibe un callback que vamos a querer disparar cuando algo funciona. 
  //En este caso, necesitamos un efecto que se dispare siempre que creemos un personaje nuevo, guardando
  //la información en el localStorage
  //Es importante siempre seguir las buenas prácticas. En este caso, es importante que cada efecto tenga solo una tarea.
  //Como por ejemplo, guardar en el localStorage. Pero para leerlo,borrarlo... deberemos crear otro efecto. 
  saveToLocalStorage = effect( () => {
    localStorage.setItem('characters', JSON.stringify( this.characters() ));
  } );
  //* Hemos definido cómo guardar la información en el localStorage. Pero si cargamos la página teniendo solo
  //* esta sintaxis, se perderá la información.  


  addCharacter( character: Character) {
    this.characters.update( (list) => [...list, character] )
  }

  
}

//! Los servicios son esenciales en Angular. 
//! Los servicios son clases que tienen un propósito particular. 
//! Los servicios trabajan con Dependency Injections o DI, que nos permite utilizar la clase como un 
//! Singleton. Es decir, la idea de los servicios es que funcionen como un lugar centralizado de nuestra información.

//? El localStorage necesita siempre de un key y un value. El Key es el nombre identificativo, mientras que el value
//? es el valor que tendrá en formato STRING. 