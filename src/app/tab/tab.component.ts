import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tabs} from "../app.component";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Output() swichTab: EventEmitter<Tabs[]> = new EventEmitter()
  @Input() tabs:Tabs[]=[]
  setActive(id:number){
    this.tabs.forEach(item=>item.isActive=item.id===id)
    this.swichTab.emit(this.tabs)
  }
  constructor() { }

  ngOnInit(): void {

  }

}
