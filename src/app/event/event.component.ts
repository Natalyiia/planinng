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
  constructor() { }

  ngOnInit(): void {
    this.selectTrainer={
      label:'Тренер',
      icon:'assets/man.png',
      options:this.event.trainers,
    }

  }

}
