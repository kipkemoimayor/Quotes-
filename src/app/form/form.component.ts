import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote=new Quote(0,"","",0,0,new Date());
  @Output() addNewQuote= new EventEmitter<Quote>();
  submitQuote(){
    this.addNewQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }

}
