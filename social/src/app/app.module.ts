import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoglComponent } from './components/gogl/gogl.component';
import { gClientId, fbClientId } from './secrets';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  VKLoginProvider,
} from 'angularx-social-login';

@NgModule({
  declarations: [AppComponent, GoglComponent],
  imports: [BrowserModule, AppRoutingModule, SocialLoginModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(gClientId),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(fbClientId),
          },
          {
            id: VKLoginProvider.PROVIDER_ID,
            provider: new VKLoginProvider('7624815'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
