import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() quote:Quote;

  constructor() { }

  ngOnInit() {
  }

}
