import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="green";



  }

}
