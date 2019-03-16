import './polyfills/polyfills';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

// // Enable either Hot Module Reloading or production mode
if (module['hot']) {
  module['hot'].accept();
  module['hot'].dispose(() => {
    modulePromise.then(appModule => appModule.destroy());
  });
} else {
  enableProdMode();
}

const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);
