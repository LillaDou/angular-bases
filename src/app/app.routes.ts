import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page';
import { HeroPageComponent } from './pages/hero/hero-page';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [

    { //home route
        path: '',
        component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent,
    },
    {
        path: 'dragonball',
        component: DragonballPageComponent,
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
        //! Si indicamos cualquier otro path en el buscador que no sea ninguno de los que tenemos aquí indicados, 
        //! la página será redireccionada al path que nosotros queramos. Así evitamos que la página se quede en blanco
    }

];
