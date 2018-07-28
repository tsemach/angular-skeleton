import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class AwsViewerComponent implements OnInit {
  
  @ViewChild('ngxgist') ngxgist: ElementRef;
  
  gistId: string;
  filename: string;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.gistId = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params: Params) => {                
        this.gistId = params['id'];                   
        console.log("AwsViewerComponent: id = " + this.gistId);
        console.log("AwsViewerComponent: filename = " + this.filename);               
      }
    );    
  }

}
