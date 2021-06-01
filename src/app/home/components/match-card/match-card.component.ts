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
  dataImage = 'https://images.unsplash.com/photo-1517747614396-d21a78b850e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'

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
    return `rotateY(${rX}deg) rotateX(${rY}deg)`
  }

  cardBgTransform() {
    const tX = this.mousePX() * -40;
    const tY = this.mousePY() * -40;
    //console.log("tX: "+tX+", tY: "+tY);
    return `translateX(${tX}px) translateY(${tY}px)`
  }

  cardBgImage() {
    return `url(${this.dataImage})`
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