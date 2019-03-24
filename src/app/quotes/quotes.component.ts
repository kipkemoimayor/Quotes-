import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import swal from 'sweetalert';
// import swal from 'sweetalert';

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
    swal("you liked it",{
      buttons:{cancel:false,confirm:false},
      timer:1000,
    })
      this.maxVotes();

  }

  downVote(quote){
    quote.id=this.quotes[quote];
    quote.downvote--
    swal("you are so mean",{
      buttons:{cancel:false,confirm:false},
      timer:1000,
      className:"red-bg",

    })

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
      swal({text:`Are you sure you want to delete this quote`,icon:"warning",buttons:{cancel:true,confirm:true},dangerMode:true}).
      then((willDelete)=>{
        if(willDelete){
          this.quotes.splice(index,1)
          swal("Quote has been deleted",{icon:"success"})
        }else{
          swal("oparation cancelled",{icon:"error",timer:2000})
        }

      });

    }
  }

  addQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote);
    swal({
    title: "Good job!",
    text: "You Posted a Quote!",
    icon: "success",
    buttons: {cancel:false,confirm:false},
    timer:2000
  });
  }


  constructor() { }

  ngOnInit() {
  }




}
