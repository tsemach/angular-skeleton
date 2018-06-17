import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  constructor(private titleService: Title, 
              private router: Router, 
              private route: ActivatedRoute) {
    titleService.setTitle('Monitor');
  }

  ngOnInit() {
  }

  onClickTunnel() {
    this.router.navigate(['tunnel'], {relativeTo: this.route});  
  }

  onClickHistogram() {
    this.router.navigate(['histogram'], {relativeTo: this.route});
  }
}
