import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // This explicitly turns on Zone.js tracking so your app never hits a runtime crash
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    // تفعيل محرك التوجيه وربطه بملف الـ 11 صفحة المجهز
    provideRouter(routes),
    
    // تمكين نظام الـ HTTP لربط المنصة مستقبلاً بباكند FastAPI والـ AI المفسر
    provideHttpClient()
  ]
};
