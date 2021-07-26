import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
 @Input() conditions:any=[]

  changeCheck(id:number){
   this.conditions.forEach((iter:any)=>iter.isSelected=iter.id===id)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
