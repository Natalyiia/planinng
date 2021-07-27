import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  @Input() option:any={}
  @Output() setSelect:EventEmitter<number>= new EventEmitter()

  handlerSelect(){
    //this.option.isSelected=!this.option.isSelected
    this.setSelect.emit(this.option.id)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
