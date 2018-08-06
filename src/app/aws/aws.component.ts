import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Directory } from '../services/directory';
// import { ReadFileHttpClientService } from '../services/read-file.httpclient.service';

/**
 */

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {
  //fileIsReady = new Subject<string>();

  direction = 'horizontal';

  constructor(/*private readFileService: ReadFileHttpClientService */) { }

  ngOnInit() {
    // this.readFileService.setBaseUrl("https://api.github.com");
    // this.fileIsReady.subscribe(
    //   (data: string) => {
    //     //console.log("AngularProjectComponent: data = " + data);
    //     let gists = JSON.parse(data);         
    //     console.log("AngularProjectComponent: data = " + JSON.stringify(gists, undefined, 2));
    //   }
    // );
    // this.readFileService.getFile('users/tsemach/gists', this.fileIsReady);
  }

}
