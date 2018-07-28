import { Directive, Input, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appViewerChange]'
})
export class ViewerChangeDirective {

  @HostBinding('style.size') size: string;

  constructor(private eRef: ElementRef) {
  }

  @HostListener('change') ngOnChanges() {
    console.log('ViewerChangeDirective: test');
  }
  @HostListener("input", ["$event.target.value"])
  onInput(value) {
    console.log(value)

  }

  @HostListener('mouseover') onMouseOver() {
    this.size = '500px, 600px';
    console.log("mouseover");
}
}
