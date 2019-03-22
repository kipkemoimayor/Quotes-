import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes=[
    new Quote(1,"Roses are red Violets are blue, King David was the Bravest King ever to be alive, Long live the king ","Collins mayor",0,0),
    new Quote(2,"Roses are red Violets are blue","Collins mayor",0,0),
  ]


  // votes:number=0;
  // dvotes:number=0;
  upVote(quote){
    quote.id=this.quotes[quote];
    quote.upvote++
  }

  downVote(quote){
    quote.id=this.quotes[quote];
    quote.downvote--

  }


  constructor() { }

  ngOnInit() {
  }

}
