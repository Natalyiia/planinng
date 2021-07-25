import {Component, Input, OnInit} from '@angular/core';
import {FilterClass, OptionClass} from "../app.component";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss']
})
export class FilterFieldComponent implements OnInit {
  @Input() filter: FilterClass = new FilterClass({})
  isOpen = false
 handlerClick(event:any){
    if(event.target.id) {
      this.isOpen = !this.isOpen
    }
 }
  // handlerBlur(event:any){
  //   console.log(event )
  //   if(event.relatedTarget){
  //     this.isOpen=!this.isOpen
  //   }
  // }
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
  }

  ngOnInit(): void {
    console.log('selected-', this.filter.getSelected())
  }

}
