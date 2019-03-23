import { Directive,ElementRef} from '@angular/core';
import { Quote } from './quote'

@Directive({
  selector: '[appHighest]'
})
 export class HighestDirective {
//   @HostListener('mouseenter') onMouseEnter(){
//     this.bgHighest("#1885");
//   }
//   @HostListener('mouseleave') onMouseLeave(){
//     this.bgHighest(null)
//   }
  public showHighest:boolean;
  constructor( elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#1885";
    this.showHighest=false;
  }




}
