import { Directive, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
//import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import { JsonpClientBackend } from '@angular/common/http';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective implements OnInit {

  constructor(private eRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  /**
   * get click event on the element the directive "sit" on
   * the function toggle the style.display to show / hide.
   * Also the function switching the little arrow icon the left.
   * 
   * @property this.eRef.nativeElement is the element referance the directive sit on.
   * @argument subMenu - is the sub menu showing when the accordion is opened. 
   *   note: it must be right after the this.eRef.nativeElement (the element we sit on)
   */
  @HostListener('click') onclick() {
    let subMenu = this.eRef.nativeElement.nextSibling;  

    let child = this.eRef.nativeElement.children[0];    
    if (subMenu.style.display === "none" || subMenu.style.display == '') {
      this.renderer.setStyle(subMenu, 'display', 'block');

      this.renderer.addClass(child, 'fa-caret-up');
      this.renderer.removeClass(child, 'fa-caret-down');  
    } 
    else {
      this.renderer.addClass(child, 'fa-caret-down');
      this.renderer.removeClass(child, 'fa-caret-up');
  
      this.renderer.setStyle(subMenu, 'display', 'none');
    }            
  }

}
