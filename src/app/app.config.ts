import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    importProvidersFrom(RouterModule.forRoot(routes, { useHash: true })),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(MarkdownModule.forRoot({ loader: HttpClient })),
  ],
};