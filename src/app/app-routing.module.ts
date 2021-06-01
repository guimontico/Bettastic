import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './home/bets/bets.component';
import { HomeComponent } from './home/home/home.component';
import { MatchesComponent } from './home/matches/matches.component';
import { TurbineComponent } from './home/turbine/turbine.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'bets', component: BetsComponent},
  { path: 'matches', component: MatchesComponent} ,
  { path: 'turbine', component: TurbineComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
