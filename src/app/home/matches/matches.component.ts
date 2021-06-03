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
      backgroundImage: "https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1077&q=80"
    },
    {
      cardId: 2, 
      cardTitle: "Futebol", 
      cardContent: "Loren Ipsun sei la o que", 
      backgroundImage: "http://www.ultrajano.com.br/wp-content/uploads/2020/08/corinthians-x-palmeiras-2-1024x576-1.jpg"
    },
    {
      cardId: 3, 
      cardTitle: "Volei", 
      cardContent: "Loren Ipsun sei la o que", 
      backgroundImage: "https://images.unsplash.com/photo-1610123055217-476ca7b8e9a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
