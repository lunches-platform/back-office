import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { prop, when } from 'ramda';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const enableProdEnvIfNeeded = when(
  prop('production'),
  () => enableProdMode()
);

const bootstrap = () => platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(console.log);

const main = () => {
  enableProdEnvIfNeeded(environment);

  bootstrap();
};

main();
