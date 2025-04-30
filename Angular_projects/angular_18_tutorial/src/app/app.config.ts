import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

/**
 * The app.config.ts file defines the appConfig object, which is used to configure
 *  the Angular application. It provides essential services such as HttpClient for
 *  making HTTP requests, ZoneChangeDetection for optimizing change detection, and
 *  Router for handling application routes. This configuration ensures that the
 *  application is set up with the necessary providers for routing and HTTP communication.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
