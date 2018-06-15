import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  host: {
    'class': 'navbar navbar-expand-lg fixed-top navbar-dark bg-dark' 
  },
})
export class TopbarComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor(private sanitizer: DomSanitizer, 
              public router: Router) {
    // this.router.events.filter(e => e instanceof NavigationStart).subscribe(event => {
    //   this.isCollapsed = true;
    // });
  }

  ngOnInit() {
  }  

  transform(label: string) {
      return this.sanitizer.bypassSecurityTrustHtml(label);
  }

}
