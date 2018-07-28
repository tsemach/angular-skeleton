import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { TreeViewComponent } from '../../tree-view/tree-view.component';
import { Directory } from '../../services/directory';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';
import { ParseProjectFiles } from '../../services/parser-filelist';

/**
 * example of file URL: https://raw.githubusercontent.com/tsemach/pyexamples/master/pyexamples.list
 */

@Component({
  selector: 'app-python-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class PythonLeftMenuComponent implements OnInit, OnDestroy {
  
  directories: Array<Directory>;
  htmlPythonFilelist: string = '';
  source = '/python/viewer';

  fileIsReady = new Subject<string>();

  constructor(private readFileService: ReadFileHttpClientService) {     
    
    // let fall2014 = new Directory('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    // let summer2014 = new Directory('Summer 2014',[],['image10.jpg','image20.jpg','image30.jpg']);
    // let pics = new Directory('Pictures',[summer2014,fall2014],[]);
    // let music = new Directory('Music',[],['song1.mp3','song2.mp3']);
    // this.directories = [pics,music];    

    // let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
    // let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
    // let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
    // this.directories = [pyexamples]; 

    // console.log("directories = " + JSON.stringify(this.directories, undefined, 2));
  }

  ngOnInit() {
    // path is: https://raw.githubusercontent.com/tsemach/pyexamples/master/pyexamples.list
    this.readFileService.setProject('pyexamples');

    this.fileIsReady.subscribe(
      (data: string) => {
        this.directories = this.parse(data);       
      }
    );
    this.readFileService.getFile('pyexamples.list', this.fileIsReady);
  }

  parse(filelist) {    
    let filesArray = filelist.split(/\r?\n/);

    let directories = new Array<Directory>();
    let parser = new ParseProjectFiles();

    let basedir = parser.parse(filesArray); 
    
    return [basedir.directories[0]];     
  }

  ngOnDestroy() {
    this.fileIsReady.unsubscribe();    
  }
  
}
