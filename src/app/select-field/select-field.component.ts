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

  handlerClick() {
      this.isOpen = !this.isOpen;
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
