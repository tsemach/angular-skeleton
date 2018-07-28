import { Component, OnInit, Input } from '@angular/core';
import { Directory } from '../services/directory';
import { Router } from '@angular/router';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() directories: Array<Directory>;
  @Input() source: string;  

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
