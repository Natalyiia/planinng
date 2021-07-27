import {Component, Input, OnInit} from '@angular/core';
import {Button, OptionSetting} from "../app.component";

@Component({
  selector: 'app-button-selector',
  templateUrl: './button-selector.component.html',
  styleUrls: ['./button-selector.component.scss']
})
export class ButtonSelectorComponent implements OnInit {
  @Input() button: Button = {
    icon: '',
    iconImage: '',
    label: '',
    width: 0,
    height: 0,
    isRotate: false,
    isDisable: false,
    size: 0,
  }
  @Input() optionSetting: OptionSetting[] = []
  isOpen: boolean = false

  handlerFilter( id: number) {
    this.optionSetting.forEach((option, index, arr) =>
      option.id === id
        ? arr[index] = {...option, isSelected: !option.isSelected}
        : arr[index] = option
    )
  }
  getField(mode:boolean=true){
      return this.optionSetting.filter(iter=>iter.isMain===mode)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
