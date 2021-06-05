import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    getTeamsData()
  }

}
function getTeamsData() {
  let url = "https://v3.football.api-sports.io/teams"
  fetch("https://v3.football.api-sports.io/teams?id=33", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "f24bb926904b30370886078867b9de5c"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
}

