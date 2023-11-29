import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { TechnologyComponent } from './component/technology/technology.component';
import { CommonModalComponent } from './component/common-modal/common-modal.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TechnologyComponent,
    CommonModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {        
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080'],
          sendAccessToken: true
      }
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
