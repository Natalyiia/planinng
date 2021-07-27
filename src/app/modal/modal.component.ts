import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Button, EventList, FilterClass, Members, Tabs} from "../app.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // @Input() modelData={isModal:false,filter:new FilterClass({}),eventList:[]}

  @Output() modalChanged: EventEmitter<boolean> = new EventEmitter()
  @Input() filter:FilterClass=new FilterClass({})
  @Input() eventList:EventList[]=[]
  @Input() filtersModal:FilterClass[]= []
  isModal:boolean=true
  buttonSave:Button={
    icon:'check',
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
  buttonSettings:Button={
    icon:'',
    iconImage:'assets/filter.png',
    label:'Настроить',
    width: 130,
    height: 36,
    isRotate:false,
    isDisable:false,
    size:12,
  }
  buttonReset:Button={
    icon:'+',
    iconImage:'',
    label:'Сбросить',
    width: 124,
    height: 36,
    isRotate:true,
    isDisable:true,
    size:20,
  }
  buttonReplace:Button={
    icon:'',
    iconImage:'assets/replace.png',
    label:'',
    width: 16,
    height: 16,
    isRotate:false,
    isDisable:false,
    size:20,
  }
  buttonTrash:Button={
    icon:'',
    iconImage:'assets/trash.png',
    label:'',
    width: 25,
    height: 25,
    isRotate:false,
    isDisable:false,
    size:20,
  }
  tabsPlaning:Tabs[]=[{title:'Oсновное',isActive:true,id:0} ,{title:'Участники', isActive:false,id:1}]
  conditions=[
    {title:'Не использовать код доступа', isSelected:true, id:0},
    {title:'Требовать регистрацию', isSelected:false, id:1},
    {title:'Запросить только имя и фамилию', isSelected:false, id:2},
    {title:'Не требовать регистрацию, имя и фамилию', isSelected:false, id:3},
  ]
  members:Members[]=[
    {name:'Все пользователи', isSelected:false,id:0},
    {name:'Максим Вильниц', isSelected:false,id:1},
    {name:'Ольга Крышкова', isSelected:false,id:2},
    {name:'Юлия Грунина', isSelected:false,id:3},
    {name:'Марат Большаков', isSelected:false,id:4},
    {name:'Светлана Иванова', isSelected:false,id:5},
  ]
  membersSelected:Members[]=[]
  constructor() { }
  closeModal(){

    this.isModal=false
    this.modalChanged.emit(this.isModal);
    console.log('close')
  }
  swichTab(tabs:Tabs[]){
    this.tabsPlaning=tabs
  }

  setSelected(id:number){
    console.log('id',id)
    if(id===0){
      this.members[0].isSelected=!this.members[0].isSelected
      this.members.forEach(iter=>{
        iter.isSelected=this.members[0].isSelected
      })
    }
    else{
      this.members[0].isSelected=false;
      this.members.forEach(iter=>iter.id===id?iter.isSelected=!iter.isSelected:iter)
    }
  }
  handlerSwap(){
    this.members=this.members.filter(iter=>{
      if(iter.isSelected&&iter.id!==0){
        this.membersSelected.push({...iter,isSelected:false})
        this.members[0].isSelected=false
        return false
      }
      else{
        return true
      }
    })
  }
  moveFromSelected(id:number){
    this.membersSelected=this.membersSelected.filter((item,index)=>{
      if(item.id===id){
        this.members.push(item)
        return false
      }
      else{
        return true
      }
    })
  }

  ngOnInit(): void {
  }

}
