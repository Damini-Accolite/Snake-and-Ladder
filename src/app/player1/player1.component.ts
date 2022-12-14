import { Component, OnInit } from '@angular/core';
import { BoardServiceService } from '../board-service.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit{
  num?: number;
  player1Pos ?: number;
  constructor(private service:BoardServiceService){}

  cc: boolean=false;
  lp: boolean=false;
  Check(){
    return this.cc;
  }

  check1(){
    return this.lp;
  }

  fundice(){
    this.num = (Math.ceil(Math.random() * 6));
    this.service.position1(this.num);
    this.service.bool(false);
    this.cc=true; 
  }

  ngOnInit(){
    this.service.message.subscribe((val)=>{
      this.cc=val;
    })

    this.service.last.subscribe((val)=>{
      this.lp=val;
    })
  }
}
