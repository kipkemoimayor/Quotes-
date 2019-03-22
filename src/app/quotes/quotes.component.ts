import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote(1,"Roses are red Violets are blue, King David was the Bravest King ever to be alive, Long live the king ","Collins mayor"),
  
  ]


  votes:number=0;
  dvotes:number=0;
  upVote(index){

    this.votes++;
  }
  downVote(index){
    this.dvotes--;
  }


  constructor() { }

  ngOnInit() {
  }

}
