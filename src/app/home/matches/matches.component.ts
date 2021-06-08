import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/football/basket.service';
import { FootballService } from "../../services/football/football.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  games: any = []
    // {
    //   cardId: Number, 
    //   cardTitle: String, 
    //   cardContent: String, 
    //   backgroundImage: String,
    //   teamHome: String,
    //   teamAway: String
    // }
  

  constructor(private footballService: FootballService,
              private basketService: BasketService,) { }

  async ngOnInit(): Promise<void> {
    const gamesFromDate = await this.basketService.getGamesFromDate('2021-06-07', '12', '2020-2021').toPromise()
    console.log(gamesFromDate);
      
    gamesFromDate.response.forEach(((game: { week: any; teams: { home: { logo: any; name: any; }; away: { logo: any; name: any; }; }; status: { short: any; }; }) => {
      let gameSet = {
        cardId: 1, 
        cardTitle: game.week, 
        cardContent: game.week, 
        backgroundImage: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80',
        teamHome: game.teams.home.logo,
        teamAway: game.teams.away.logo
      };
      this.games.push(gameSet)
    }));
  }
}

