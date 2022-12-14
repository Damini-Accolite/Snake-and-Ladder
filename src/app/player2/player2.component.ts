import { Component,OnInit } from '@angular/core';
import { BoardServiceService } from '../board-service.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit{
  num?: number;
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
    this.service.position2(this.num);
    this.service.bool(false);
    this.cc=true;
  }
  ngOnInit(): void {
    this.service.message.subscribe((val)=>{
      this.cc=val;
    })

    this.service.last.subscribe((val)=>{
      this.lp=val;
    })
  }
}
