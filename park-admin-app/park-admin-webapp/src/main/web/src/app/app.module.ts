import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faParking,
  faCarSide,
  faWheelchair,
  faShuttleVan,
  faMotorcycle,
  faPlusCircle,
  faMinusCircle,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowsAltH,
  faArrowsAltV
} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatPaginatorModule, MatRadioModule, MatSidenavModule,
  MatToolbarModule, MatTooltipModule, MatSnackBarModule
} from '@angular/material';
import { EstacComponent } from './components/estac/estac.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NivelEdicionComponent } from './components/nivel-edicion/nivel-edicion.component';
import { NivelMapaComponent } from './components/nivel-mapa/nivel-mapa.component';



@NgModule({
  declarations: [
    AppComponent,
    EstacComponent,
    NivelEdicionComponent,
    NivelMapaComponent
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
    MatTooltipModule,
    MatRadioModule,
    MatSnackBarModule
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
       faArrowsAltH, faArrowsAltV,
      faTrashAlt);
  }
 }
