import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-python-viewer-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class PythonDescriptionComponent implements OnInit {
  @Input() description = '';
  @Input() from = '';

  constructor() { }

  ngOnInit() {
  }

}
