import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';


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

  //*Método tradicional hacer una inyección de dependencias(servicios) en un componente
  // constructor(
  //       public DragonballService: DragonballService
  // ) {}
  //*Método recomendado: inyección de dependencias(servicios) como una propiedad,
  //*utilizando el inject (importado de angular core) y utilizando la referencia de la clase de 
  //*DragonballService
  public dragonballService = inject(DragonballService)


}
