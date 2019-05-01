import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faParking, faCarSide, faWheelchair, faShuttleVan, faMotorcycle  } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatGridListModule, MatIconModule,
  MatInputModule, MatPaginatorModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { EstacEdicionComponent } from './estac-edicion/estac-edicion.component';
import { NivelDetailComponent } from './nivel-detail/nivel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EstacEdicionComponent,
    NivelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(faParking, faCarSide, faWheelchair, faShuttleVan, faMotorcycle);
  }
 }
