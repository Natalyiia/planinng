import { Component, Input, OnInit } from '@angular/core';
import {Button} from "../app.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @ Input() button:Button={
    icon:'',
    iconImage:'',
    label:'',
    width: 0,
    height: 0,
    isRotate:false,
    isDisable:false,
    size:0,
  }
  isTick:boolean=false
  isPressed:boolean=false

  constructor() { }

  ngOnInit(): void {
    this.isTick=this.button.icon==='check'
  }

}
