import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardServiceService {
  // private color = new BehaviorSubject <string> ('default value')
  // actualColor = this.color.asObservable();


  // currentColor(colors: string) {
  //   this.color.next(colors);
  // }

  constructor() { }
  message = new EventEmitter<boolean>();
  pos1 = new EventEmitter<number>();
  pos2 = new EventEmitter<number>();
  last = new EventEmitter<boolean>();

  btnDisable(data : boolean){
    this.last.emit(data);
  }

  bool(data : boolean){
    this.message.emit(data);
  }

  position1(data : number){
    this.pos1.emit(data);
  }

  position2(data : number){
    this.pos2.emit(data);
  }

}
