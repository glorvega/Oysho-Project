import { isDevMode, NgModule } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from '../app.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
  ],
  exports: [StoreModule],
  providers: [Store],
})
export class AppStoreModule {}
