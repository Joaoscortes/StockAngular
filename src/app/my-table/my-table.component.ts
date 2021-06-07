import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() {
    console.log("constructor", this.data);

  }

  ngOnInit(): void {
    console.log("OnInit", this.data);

  }

}
