import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faParking, faCarSide, faWheelchair, faShuttleVan, faMotorcycle,
  faPlusCircle, faMinusCircle, faArrowCircleLeft, faArrowCircleRight, faArrowsAltH, faArrowsAltV  } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatPaginatorModule, MatSidenavModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { EstacComponent } from './components/estac/estac.component';
import { NivelComponent } from './components/nivel/nivel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EstacComponent,
    NivelComponent
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
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    library.add(
      faParking,
      faCarSide,
      faWheelchair,
      faShuttleVan,
      faMotorcycle,
      faPlusCircle, faMinusCircle,
      faArrowCircleLeft, faArrowCircleRight,
       faArrowsAltH, faArrowsAltV);
  }
 }
