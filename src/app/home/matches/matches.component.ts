import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/football/basket.service';
import { FootballService } from "../../services/football/football.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  games = [
    {
      cardId: 1, 
      cardTitle: "Basket", 
      cardContent: "Loren Ipsun sei la o que", 
      backgroundImage: "https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1077&q=80",
      teamHome: "assets/teams/logos/bulls.png",
      teamAway: "assets/teams/logos/celtics.png"
    },
    {
      cardId: 2, 
      cardTitle: "Futebol", 
      cardContent: "Loren Ipsun sei la o que", 
      backgroundImage: "https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1077&q=80",
      teamHome: "assets/teams/logos/nets.png",
      teamAway: "assets/teams/logos/lakers.png"
    },
    {
      cardId: 3, 
      cardTitle: "Volei", 
      cardContent: "Loren Ipsun sei la o que", 
      backgroundImage: "https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1077&q=80",
      teamHome: "assets/teams/logos/warriors.png",
      teamAway: "assets/teams/logos/heat.png"
    }
  ]

  constructor(private footballService: FootballService,
              private basketService: BasketService,) { }

  async ngOnInit(): Promise<void> {
    const gamesFromDate = await this.basketService.getGamesFromDate('2021-06-07', '12', '2020-2021').toPromise()
    console.log(gamesFromDate);
  }
}

