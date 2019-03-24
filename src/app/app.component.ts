import { Component } from '@angular/core';
import { Quote } from './quote';
import { TopQuotes} from './top-quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Quotes';
  topQuotes=[
    new TopQuotes(1,"Rain is not the problem Too much and people complain and versa vice","kinjeketille Nkualle"),
    new TopQuotes(2,"Love the one you have beacuse you will never be certain of tommorow","Marylyn monroe"),
    new TopQuotes(3,"Like flower life blowsoms and one day like the flower it will fade ","Collins kipkemoi"),
    new TopQuotes(4,"Always learn Programming by practice ","Someone in Moringa")
  ]
}
