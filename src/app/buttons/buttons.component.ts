import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete=new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
