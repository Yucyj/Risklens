import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. This line turns Zone.js back on so Angular compiles smoothly!
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    // 2. This loads your dashboard page paths safely
    provideRouter(routes)
  ]
};

