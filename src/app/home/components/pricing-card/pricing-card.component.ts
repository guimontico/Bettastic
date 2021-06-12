import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {
  
  width = 0;
  height = 0;
  mouseX = 0;
  mouseY = 0;
  mouseLeaveDelay: any;

  constructor() { }

  @Input() cardTitle!: string;
  @Input() cardContent!: string;
  @Input() backgroundImage!: string;
  @Input() teamHomeLogo!: string;
  @Input() teamAwayLogo!: string;
  
  @ViewChild('card') card!: ElementRef;

  ngAfterViewInit(): void {
  this.width = this.card.nativeElement.offsetWidth;
  this.height = this.card.nativeElement.offsetWidth;
  }

  ngOnInit(): void {
  }

  mousePX() {
    return this.mouseX / this.width;
  }

  mousePY() {
    return this.mouseY / this.height;
  }

  cardStyle() {
    const rX = this.mousePX() * 30;
    const rY = this.mousePY() * -30;
    return `rotateY(${rX}deg) rotateX(${rY}deg)`
  }

  cardBgTransform() {
    const tX = this.mousePX() * -50;
    const tY = this.mousePY() * -50;
    return `translateX(${tX}px) translateY(${tY}px)`
  }

  cardBgImage() {
    return `url(${this.backgroundImage})`
  }

  handleMouseMove(e: any) {
    this.mouseX = e.pageX - this.card.nativeElement.offsetLeft - this.width/2;
    this.mouseY = e.pageY - this.card.nativeElement.offsetTop - this.height/2;
  }

  handleMouseEnter() {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseLeave() {
    this.mouseLeaveDelay = setTimeout(()=>{
      this.mouseX = 0;
      this.mouseY = 0;
    }, 1000);
  }
  

}