import { Injectable, signal } from '@angular/core';
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

  addCharacter( character: Character) {
    this.characters.update( (list) => [...list, character] )
  }
  
}

//! Los servicios son esenciales en Angular. 
//! Los servicios son clases que tienen un propósito particular. 
//! Los servicios trabajan con Dependency Injections o DI, que nos permite utilizar la clase como un 
//! Singleton. Es decir, la idea de los servicios es que funcionen como un lugar centralizado de nuestra información.