import { Component, OnInit } from '@angular/core';
import { Array } from '../array';
import { BoardServiceService } from '../board-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  constructor(private boardService : BoardServiceService){}
  
  player1Pos : number =0;
  player2Pos : number=0;
  Position?: number;
  darkTheme ?: string;
  point1=document.getElementById('cell1');
  point2=document.getElementById('cell1');
  prevPoint1 = this.point1;
  prevPoint2 = this.point2;

  ngOnInit(){
    this.boardService.pos1.subscribe((val1)=>{
      this.Position = val1;
      if(this.player1Pos + val1<=36){
        this.player1Pos=this.player1Pos+ val1;
        if(this.player1Pos==36){
          this.boardService.btnDisable(true);
        }
      }
      if(this.snake(this.player1Pos)){
        this.player1Pos=this.snake(this.player1Pos);
      }
      else if (this.ladder(this.player1Pos)){
        this.player1Pos=this.ladder(this.player1Pos);
      }
      this.point1=document.getElementById('cell'+this.player1Pos);
      if(this.point1!=null){
        this.point1.style.backgroundColor = "green";
      if(this.prevPoint1!=null)
        this.prevPoint1.style.backgroundColor="white";
      }
      this.prevPoint1=this.point1;
    })

    this.boardService.pos2.subscribe((val2)=>{
      this.Position = val2;
      if(this.player2Pos + val2<=36){
        this.player2Pos=this.player2Pos+ val2;
        if(this.player2Pos==36){
          this.boardService.btnDisable(true);
        }
      }
      if(this.snake(this.player2Pos)){
        this.player2Pos=this.snake(this.player2Pos);
      }
      else if (this.ladder(this.player2Pos)){
        this.player2Pos=this.ladder(this.player2Pos);
      }
      this.point2=document.getElementById('cell'+this.player2Pos);
      if(this.point2!=null){
        this.point2.style.backgroundColor = "blue";
      if(this.prevPoint2!=null)
        this.prevPoint2.style.backgroundColor="white";
      }
      this.prevPoint2=this.point2;
    })

    this.board();
  }

  arr =new Array();
  board(){
    let num=36;
    for (let i = 0; i< 6; i++) {
      for(let j = 0; j< 6; j++) {
          this.arr[i] = [];
      }
    }
    for (let i = 0; i< 6; i++) {
      if(i%2!=0){
        for(let j =5; j>=0; j--) {
          this.arr[i][j] = num;
          num--;
        }
      }
      else{
        for(let j = 0; j< 6; j++) {
          this.arr[i][j] = num;
          num--;
        }
      }
    }
  } 

    snakes: number[][] = [
      [9, 4],
      [13, 6],
      [19, 2],
      [34, 22],
        
    ];
    ladders: number[][] = [
      [3, 11],
      [5, 23],
      [7, 15],
      [21, 33]
    ];
    snake(val2 :number){
      for(var i=0;i<this.snakes.length;i++){
        if(val2 === this.snakes[i][0]){
          val2=this.snakes[i][1];
          break;
        }
      }
      return val2;
    }
    ladder(val2 :number){
      for(var i=0;i<this.ladders.length;i++){
        if(val2 === this.ladders[i][0]){
          val2=this.ladders[i][1];
          break;
        }
      }
      return val2;
    }
}
