import { Component, signal } from "@angular/core";


@Component({
    templateUrl: './hero-page.html',
})
export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    newHero = 'Spiderman';
    newAge = 22;

    getHeroDescription() {
        return `${ this.name() } - ${ this.age() }`;
    }

    changeHero() {
        //*Mi solución a la tarea - funciona
        // this.name.update( (newName) => newName = this.newHero );
        // this.age.update( (value) => value = this.newAge )

        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        //*Mi solución a la tarea- funciona
        // this.age.update( (value) => value = 60 );

        this.age.set(60);
    }

    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);
    }

}