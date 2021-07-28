import {Component, Input, OnInit} from '@angular/core';
import {EventList} from "../app.component";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event:EventList={title:'',type:'',id:0, trainers:[]}
  selectTrainer:any={}
  date:any
  time:any
  setDate(event:any){
    //console.log(event.target.value)
    this.date=event.target.value
  }
  setTime(event:any){
   // console.log(event.target.value)
    this.time=event.target.value
  }
  constructor() { }

  ngOnInit(): void {
    this.selectTrainer={
      label:'Тренер',
      icon:'assets/man.png',
      options:this.event.trainers,
    }

  }

}
