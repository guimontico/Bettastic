import {Component, Input, OnInit} from '@angular/core';
import {BasketGames} from '../../../models/basketGame';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
   @Input() sliderConfig: any;
   @Input() basketGames!: BasketGames;
   @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.basketGames);
    console.log(this.title);
    console.log(this.sliderConfig);
    
  }
  

}
