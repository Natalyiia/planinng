import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SessionClass} from "../app.component";
import { HostListener } from "@angular/core"

@Component({
  selector: 'app-session-row',
  templateUrl: './session-row.component.html',
  styleUrls: ['./session-row.component.scss']
})
export class SessionRowComponent implements OnInit {
  isSortByProgress:boolean=false;
  screenWidth: number=0
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?:any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth<=900){
      this.head[2]='Уч.'
    }
  }

  @Input() session:SessionClass=new SessionClass({})
  isEditor:boolean=false
  @Input()isHeader:boolean=false
  head=['Дата начала', 'Название', 'Участников', 'Тренер', 'Прогресс']
  @Output() sorting :EventEmitter<any>=new EventEmitter();

  constructor() {
    this.getScreenSize();
  }
  onSorting(){
    this.sorting.emit()
  }
  sortingByProgress() {
    this.isSortByProgress = !this.isSortByProgress
    this.onSorting()

  }
  ngOnInit(): void {
  }


}
