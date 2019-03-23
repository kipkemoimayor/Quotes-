import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes=[
    new Quote(1,"Roses are red Violets are blue, King David was the Bravest King ever to be alive, Long live the king ","Collins mayor",0,0,new Date(Date())),
    new Quote(2,"Roses are red Violets are blue","Collins mayor",0,0,new Date(Date())),
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
  //geting the maximum votes
  key:any;
  holdHighest=[];
  maxVotes(){
    for(this.key in this.quotes){
      if(this.key>1){
        return this.key;
      }
    }
  }









  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure tou want to delete this quote`);
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
    else{

    }
  }

  addQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote);
  }


  constructor() { }

  ngOnInit() {
  }




}
