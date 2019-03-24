import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes=[
    new Quote(1,"Roses are red Violets are blue, King David was the Bravest King ever to be alive, Long live the king ","Collins mayor",0,0,new Date(2019,2,22)),
    new Quote(2,"Roses are red Violets are blue","Collins mayor",0,0,new Date(2019,1,31)),
  ]





  // votes:number=0;
  // dvotes:number=0;
  upVote(quote){
    quote.id=this.quotes[quote];
    quote.upvote++
      this.maxVotes();

  }

  downVote(quote){
    quote.id=this.quotes[quote];
    quote.downvote--

  }
  //geting the maximum votes
  key:any;
  holdHighest=[];
  i:any;
  hold:any=0;
  maxVotes(){
    for(this.key in this.quotes){
      this.holdHighest.push(this.quotes[this.key].upvote);
    }

    let k=Math.max(...this.holdHighest);
    for(this.i in this.holdHighest ){
      if(this.holdHighest[this.i]>=k){
        this.hold=this.holdHighest[this.i];
      }
    }
  }
  //toogle QuotesComponent
  // toogleQuotes(index){
  //   this.quotes[index].showDescription=!this.quotes[index].showDescription;
  // }




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
