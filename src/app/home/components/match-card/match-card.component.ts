import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss']
})
export class MatchCardComponent implements OnInit {
  
  width = 0;
  height = 0;
  mouseX = 0;
  mouseY = 0;
  mouseLeaveDelay: any;
  dataImage = 'src/assets/carousel/chelsea.jpg'

  constructor() { }
  
  @ViewChild('card')
  card!: ElementRef;

  ngAfterViewInit(): void {
  this.width = this.card.nativeElement.offsetWidth;
  this.height = this.card.nativeElement.offsetWidth;
  console.log(this.width);
  console.log(this.height);
  
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
    //console.log("rx: "+rX+", rY: "+rY);
    return `rotate(${rX}deg) rotate(${rY}deg)`
  }

  cardBgTransform() {
    const tX = this.mousePX() * -40;
    const tY = this.mousePY() * -40;
    //console.log("tX: "+tX+", tY: "+tY);
    return `translate(${tX}px, ${tY}px)`
  }

  cardBgImage() {
    return {
      //backgroundImage: 'https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop='
      backgroundImage: `url(${this.dataImage})`
    }
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