import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.bgHighest("#1885");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.bgHighest(null)
  }

  constructor(private elem:ElementRef) {}
  private bgHighest(color:string){
    this.elem.nativeElement.style.backgroundColor=color;

  }

}
