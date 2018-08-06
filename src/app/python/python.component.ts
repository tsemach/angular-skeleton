import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  @Input() code = '';
  direction = 'horizontal';

  constructor(private router: Router, 
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onClickTunnel() {
    this.router.navigate(['tunnel'], {relativeTo: this.route});  
  }

  onClickHistogram() {
    this.router.navigate(['histogram'], {relativeTo: this.route});
  }

  onCode(event) {
    console.log("Python onCode = ");
  }
}
