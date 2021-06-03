import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./nav/navbar/navbar.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home/home.component';
import { BetsComponent } from './home/bets/bets.component';
import { MatchesComponent } from './home/matches/matches.component';
import { TurbineComponent } from './home/turbine/turbine.component';
import { MatchCardComponent } from './home/components/match-card/match-card.component';
import { CarouselComponent } from './home/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BetsComponent,
    MatchesComponent,
    TurbineComponent,
    MatchCardComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Added for custom elements support
  ]
})
export class AppModule { }
