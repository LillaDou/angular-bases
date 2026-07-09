import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    templateUrl: './hero-page.html',
    imports: [UpperCasePipe], //Importamos el pipe para utilizar el uppercase en el html
})
export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);
    // newHero = 'Spiderman';
    // newAge = 22;

    //* Señal computada
    heroDescription = computed(() => {
        const description = `${ this.name() } - ${ this.age() }`;
        return description;
    })

    //* Solución original a la tarea
    // getHeroDescription() {
    //     return `${ this.name() } - ${ this.age() }`;
    // }

    //* Señal computada
    capitalizedName = computed( () => this.name().toLocaleUpperCase())


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

//* Las señales son maneras actualizadas de cambiar el estado de la aplicación 

//* Una señal computada es una señal común de solo lectura (read-only) cuyos valores derivan de otras señales.
//* Por lo tanto, pueden cambiar si sus dependencias (las señales) cambian.
//* A las señales normales (writable signals) puedes asignarle valores (por ejemplo, el .set() )
//* Pero las señales computadas solo cogen los valores de sus dependencias (las señales que contiene).
//* Esto es bueno para evitar cambios o modificaciones involuntarias.