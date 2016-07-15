import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/template.html'
})
export class dashboardComponent { 
  dataSet : any = [];
  constructor(){
    this.dataSet = [
      {title : "Tweet 1", desc : "This is description of Tweet 1"},
      {title : "Tweet 2", desc : "This is description of Tweet 2"},
      {title : "Tweet 3", desc : "This is description of Tweet 3"},
      {title : "Tweet 4", desc : "This is description of Tweet 4"},
      {title : "Tweet 5", desc : "This is description of Tweet 5"},
      {title : "Tweet 1", desc : "This is description of Tweet 6"},
    ]
  }
}