import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

import {
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { NivelDetailComponent } from './nivel-detail/nivel-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EstacionamientoComponent,
    NivelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  faCarSide = faCarSide;
}
