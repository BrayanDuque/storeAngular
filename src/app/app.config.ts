import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
//CON ESTA IMPORTACION NOS AYUDA HACER LLAMADOS A LAS API´S
import { provideHttpClient, HttpClientModule, withFetch } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withComponentInputBinding(),withPreloading(PreloadAllModules)),
     provideHttpClient()
    ]
};
