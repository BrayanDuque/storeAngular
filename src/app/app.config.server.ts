import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
provideRouter
import { appConfig } from './app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);



//estoy le dice a angular que envie los parametros como inputs