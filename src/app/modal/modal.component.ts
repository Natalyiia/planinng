import {Component, Input, OnInit} from '@angular/core';
import {Button, EventList, FilterClass} from "../app.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // @Input() modelData={isModal:false,filter:new FilterClass({}),eventList:[]}

  @Input() isModal:boolean=false
  @Input() filter:FilterClass=new FilterClass({})
  @Input() eventList:EventList[]=[]
  buttonSave:Button={
    icon:'&#10004;',
    iconImage:'',
    label:'',
    width: 24,
    height: 24,
    isRotate:false,
    isDisable:false,
    size:18,
  }
  buttonClose:Button={
    icon: '+',
    iconImage:'',
    label:'',
    width: 24,
    height: 24,
    isRotate: true,
    isDisable:true,
    size:25,
  }
  tabsPlaning=[{title:'Oсновное',isActive:true,id:0} ,{title:'Участники', isActive:false,id:1}]
  conditions=[
    {title:'Не использовать код доступа', isSelected:true, id:0},
    {title:'Требовать регистрацию', isSelected:false, id:1},
    {title:'Запросить только имя и фамилию', isSelected:false, id:2},
    {title:'Не требовать регистрацию, имя и фамилию', isSelected:false, id:3},
  ]
  constructor() { }
  closeModal(){
    this.isModal=false
    console.log('close')
  }
  ngOnInit(): void {
  }

}
