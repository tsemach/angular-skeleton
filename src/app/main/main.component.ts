import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private titleService: Title, private router: Router) {
    titleService.setTitle('Monitor');
  }

  ngOnInit() {
  }

  onClickTunnel() {
    this.router.navigate(['/tunnel']);  
  }

  onClickHistogram() {
    this.router.navigate(['/histogram']);
  }
}
