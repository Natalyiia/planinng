import {Component, Input, OnInit} from '@angular/core';
import {Tabs} from "../app.component";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabs:Tabs[]=[]
  setActive(id:number){
    this.tabs.forEach(item=>item.isActive=item.id===id)
  }
  constructor() { }

  ngOnInit(): void {

  }

}
