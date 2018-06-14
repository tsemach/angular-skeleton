import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(private titleService: Title, private router: Router) {
    titleService.setTitle('Monitor');
  }

  onClickTunnel() {
    this.router.navigate(['/tunnel']);  
  }

  onClickHistogram() {
    this.router.navigate(['/histogram']);
  }
}
