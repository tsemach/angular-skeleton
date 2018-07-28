import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-python-viewer-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class PythonOutputComponent implements OnInit {
  @Input() output = '';

  constructor() { }

  ngOnInit() {
  }

}
