import {Component, Input, OnInit} from '@angular/core';
import {OptionClass} from "../app.component";

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {
  @Input() filter: any = {
    label:'',
    icon:'',
    options:[],
  }
  isOpen = false

  constructor() {
  }

  ngOnInit(): void {
  }

  handlerClick(event: any) {
      this.isOpen = !this.isOpen;
      //console.log(this.filter.options)
  }

  handlerFilter(event: any, id: number) {
    this.filter.options.forEach((option: OptionClass, index: number, arr: any) =>
      option.id === id
        ? arr[index] = {...option, isSelected: !option.isSelected}
        : arr[index] = {...option, isSelected: false}
    )

  }
  isSelected(){
    return this.filter.options.findIndex((option: OptionClass)=>option.isSelected)>=0
  }
  getSelected():string{
    return this.filter.options.find((option: OptionClass)=>option.isSelected).value
  }
}

/*

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
    console.log('selected-', this.filter.getSelected())
  }

}
*/
