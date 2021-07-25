import {Component, Input, OnInit} from '@angular/core';
import {SessionClass} from "../app.component";

@Component({
  selector: 'app-session-row',
  templateUrl: './session-row.component.html',
  styleUrls: ['./session-row.component.scss']
})
export class SessionRowComponent implements OnInit {
  @Input() session:SessionClass=new SessionClass({})
  isEditor:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
