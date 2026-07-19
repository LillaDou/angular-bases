import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";


interface Character {
  id: number; 
  name: string; 
  power: number;
}


@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [
    CharacterList,
    CharacterAdd
]
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>( [
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ] ); 

  addCharacter() {
    if ( !this.name() || !this.power || this.power() <= 0 ) {
      return;
    }

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: 10000,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update( (list) => [... list, newCharacter] );
    console.log({newCharacter});
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
