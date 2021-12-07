import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './puplic/template/header/header.component';
import { NavbarComponent } from './puplic/template/navbar/navbar.component';
import { FooterComponent } from './puplic/template/footer/footer.component';
import { NotFoundComponent } from './puplic/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './puplic/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './puplic/general/home/home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
