import {Component, HostListener, Input, OnInit} from '@angular/core';
import {FilterClass} from "../app.component";

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss']
})
export class FilterFieldComponent implements OnInit {
  @Input() filter: FilterClass = new FilterClass({})
  @Input() isModal:boolean=false
  width:number=200
  isOpen = false
 handlerClick(event:any){
    if(event.target.id) {
      this.isOpen = !this.isOpen
    }
 }
  screenWidth: number=0
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?:any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=900){
      this.width=this.screenWidth-70
    }
    else{
      this.width=200
    }
  }
  handlerFilter(event: any, id: number) {
    if (id === 0) {
      this.filter.options.forEach((option, index, arr) =>
        option.id != id ?
          arr[index] = {...arr[index], isSelected: false}
          : arr[index] = {...option, isSelected: true})
    } else {
      this.filter.options[0] = {...this.filter.options[0], isSelected: false}
      this.filter.options.forEach((option, index, arr) =>
        option.id === id
          ? arr[index] = {...option, isSelected: !option.isSelected}
          : arr[index] = option
      )
      if (this.filter.options.findIndex(option => option.isSelected) < 0) {
        this.filter.options[0].isSelected = true;
      }
    }
  }

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {

  }

}
