import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor ='blue';
   }

}
