import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/template.html',
  directives: [ROUTER_DIRECTIVES]
})
export class dashboardComponent { 
  showCompose : boolean;
  tweetMsg : string = "";
  dataSet : any = [];
  
  constructor(){
    this.dataSet = [
      {title : "Tweet 1", desc : "This is description of Tweet 1", timestamp : new Date("1/12/15").toLocaleString()},
      {title : "Tweet 2", desc : "This is description of Tweet 2", timestamp : new Date("2/1/15").toLocaleString()},
      {title : "Tweet 3", desc : "This is description of Tweet 3", timestamp : new Date("3/30/15").toLocaleString()},
      {title : "Tweet 4", desc : "This is description of Tweet 4", timestamp : new Date("4/5/15").toLocaleString()},
      {title : "Tweet 5", desc : "This is description of Tweet 5", timestamp : new Date("5/19/15").toLocaleString()},
      {title : "Tweet 6", desc : "This is description of Tweet 6", timestamp : new Date("6/21/15").toLocaleString()},
    ];
    this.showCompose = false;
    
    this.dataSet.reverse();
  }
  
  showComposeTweet(){
    this.showCompose = !this.showCompose;
  }
  
  postTweet(){
    console.log("form submited:" + this.tweetMsg);
    this.dataSet.unshift({
      title : "Tweet " + (this.dataSet.length + 1), 
      desc : this.tweetMsg,
      timestamp : new Date().toLocaleString()
    })
    this.tweetMsg = "";
    this.showCompose = false;
  }
}