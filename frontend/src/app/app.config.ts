import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './interceptors';
import { provideStore } from '@ngrx/store';
import { authReducer } from './state/reducers/auth.reducers';
import { incidentReducer } from './state/reducers/incidents.reducers';
import { viewReducer } from './state/reducers/views.reducers';
import { pollReducer } from './state/reducers/polls.reducers';
import { voteReducer } from './state/reducers/votes.reducers';
import { AuthEffects } from './state/effects/auth.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({
      'auth':authReducer,
      'incidents':incidentReducer,
      'views':viewReducer,
      'polls':pollReducer,
      'votes':voteReducer,
      
      // auth:authReducer,
      // incidents:incidentReducer,
      // views:viewReducer,
      // poll:pollReducer,
      // votes:voteReducer
    }),
    provideEffects([
      AuthEffects
    ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    
    ]
};
