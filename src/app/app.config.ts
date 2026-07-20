import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    
    //! HashStrategy
    //Es muy utilizado en los Single Page Applications.
    //Añade un # al final del route o link de nuestra aplicación para que los diferentes componentes
    //de nuestra aplicación estén unidos a un mismo route. 
    //Ejemplo: subimos nuestra aplicación a netlify con el link angular-bases.netlify.app/
    //Si entramos en el componente de dragonball-super, el link cambiará a angular-bases.netlify.app/dragonball-super
    //Sin embargo, si cargamos el navegador nos dará error o que no encuentra la página indicada. Esto es porque
    //hemos subido la página de angular a Netlify y coge el route principal.
    //Para que podamos acceder a los diferentes componentes y que podamos ver la información de estos
    //al cargar el navegador, utilizamos el hashStrategy. Esto añade un # al link: 
    //angular-bases.netlify.app/#
    //Con esto, conseguimos lo que buscábamos, ya que todos los componentes van a estar unidos a un mismo route con el #.
    //Podremos cargar el navegador estando en angular-bases.netlify.app/#/dragonball-super sin recibir un error. Veremos
    //el contenido del componente sin problemas
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ]
};
