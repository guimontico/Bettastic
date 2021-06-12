import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/football/basket.service';
import { FootballService } from 'src/app/services/football/football.service';

@Component({
  selector: 'app-turbine',
  templateUrl: './turbine.component.html',
  styleUrls: ['./turbine.component.scss']
})
export class TurbineComponent implements OnInit {

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

  ngOnInit(): void {
    
  }
}
