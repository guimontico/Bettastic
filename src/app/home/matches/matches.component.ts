import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketGames } from 'src/app/models/basketGame';
import { BasketService } from 'src/app/services/football/basket.service';
import { FootballService } from "../../services/football/football.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  sticky = false;
  todayDate!: string;
  subs: Subscription[] = [];
  nbaGames!: BasketGames;
  euroLeagueGames!: BasketGames;
  nbbGames!: BasketGames;
  acbGames!: BasketGames;
  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  @ViewChild('stickHeader') header!: ElementRef;
  
  constructor(private basketService: BasketService,
              private footballService: FootballService,){}

  ngOnInit(): void {
    this.todayDate = new Date().toISOString().split('T')[0];
    this.subs.push(this.basketService.getNbaGames(this.todayDate).subscribe(data => this.nbaGames = data));
    this.subs.push(this.basketService.getEuroLeagueGames(this.todayDate).subscribe(data => this.euroLeagueGames = data));
    this.subs.push(this.basketService.getNbbGames(this.todayDate).subscribe(data => this.nbbGames = data));
    this.subs.push(this.basketService.getAcbGames(this.todayDate).subscribe(data => this.acbGames = data));

    console.log("matches");
    
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    /*
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  */
  }
}