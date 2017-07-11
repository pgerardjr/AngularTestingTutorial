import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BannerModule } from './app/banner.module';
import { WelcomeModule } from './app/welcome.module';

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(BannerModule);
platformBrowserDynamic().bootstrapModule(WelcomeModule);
