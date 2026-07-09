import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.html',
    styleUrls: ['./counter-page.css'],
})
export class CounterPageComponent {

    counter = 10;
    counterSignal = signal( 10 ); //! --> Esto es una señal

    constructor() {}

    increaseBy( value: number ) {
        this.counter += value; 

        // this.counterSignal.set( this.counterSignal() + value ); 
        //* Con esto hacemos el mismo efecto de sumar y restar el valor que el del counter. Sin embargo. 
        //* con el set RESETEAMOS totalmente el valor original. Para mantener el valor original ç
        //*  utilizamos el update():
        this.counterSignal.update( (current) => current + value );

    }

    resetCounter( ) {
        this.counter = 0;
        this.counterSignal.set(0); //*Con las señales podemos RESETEAR el valor con el .set()
    }


}

