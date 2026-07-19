import {  Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface'; 
//Si estamos importando una interfase, es mejor siempre indicarlo con un type. Así es más fácil identificarlo

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {

  characters = input.required<Character[]>();
  listName = input.required<string>();


}
