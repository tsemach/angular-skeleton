// import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, SecurityContext } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// /**
//  * from: https://stackoverflow.com/questions/42458346/need-to-insert-script-tag-in-angular-2
//  * 
//  * <app-aws-scripthack src="https://gist.github.com/tsemach/650757635de8b7bd2122fe706c1fc91b.js" type="text/javascript"></app-aws-scripthack> 
//  */

// @Component({
//   selector: 'app-aws-scripthack',
//   templateUrl: './scripthack.component.html',
//   styleUrls: ['./scripthack.component.css']
// })
// export class AwsScriptHackComponent implements OnInit, AfterViewInit {
//   @Input() src: string;

//   @Input() type: string;

//   @ViewChild('script') script: ElementRef;

//   constructor(private sanitizer: DomSanitizer) {
//   }

//   ngOnInit() {    
//   }

//   convertToScript() {    
//     let element = this.script.nativeElement;
//     let script = document.createElement("script");
//     script.type = this.type ? this.type : "text/javascript";

//     if (this.src) {
//       script.src = this.src;
//     }
//     if (element.innerHTML) {
//       script.innerHTML = element.innerHTML;
//     }
//     let parent = element.parentElement;
//     parent.parentElement.replaceChild(script, parent);
//   }

//   ngAfterViewInit() {
//     this.convertToScript();
//   }

// }

import { Component, Input, ViewChild, ElementRef, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'aws-ngx-gist',
  templateUrl: './ngx-gist.component.html',
  // template:`
  //   <iframe #iframe type="text/javascript" width="60%" frameborder="0" style = "height:inherit"></iframe>
  // `,
  styleUrls: ['./ngx-gist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AwsNgxGistComponent implements OnChanges {
  @ViewChild('iframe') iframe: ElementRef;
  @Input() gistId;
  @Input() file: string;

  ngOnChanges() {
    let fileName = (this.file) ? this.file : ''; 
    this.iframe.nativeElement.id = 'gist-' + this.gistId;
    let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
      let content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }

}
