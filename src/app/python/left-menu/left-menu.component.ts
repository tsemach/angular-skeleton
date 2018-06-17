import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private eRef: ElementRef, private rendere: Renderer2) { }

  ngOnInit() {
  }

  // onDropdown($event){
  //   let thisPElem = $event.target;
  //   let thisPSibling = thisPElem.nextSibling;
    
  //   if (thisPSibling == null) {
  //     thisPSibling = thisPElem.parentNode.nextSibling;
  //     if (thisPSibling == null) {
  //     console.log("onDropdown: thisPSibling is null, event = " + JSON.stringify(event));
      
  //     return;
  //     }
  //   }

  //   if (thisPSibling.style.display === "block") {
  //     thisPSibling.style.display = "none";
  //   } 
  //   else {
  //     thisPSibling.style.display = "block";
  //   }
  // }
}
