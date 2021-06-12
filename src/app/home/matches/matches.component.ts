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

  async ngOnInit(): Promise<void> {
    this.todayDate = new Date().toISOString().split('T')[0];
    this.nbaGames = await this.basketService.getNbaGames(this.todayDate).toPromise()
    this.euroLeagueGames = await this.basketService.getNbaGames(this.todayDate).toPromise()
    this.nbbGames = await this.basketService.getNbaGames(this.todayDate).toPromise()
    this.acbGames = await this.basketService.getNbaGames(this.todayDate).toPromise()

    console.log(this.nbaGames);
    console.log(this.euroLeagueGames);
    console.log(this.nbbGames);
    console.log(this.acbGames);
    
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}

