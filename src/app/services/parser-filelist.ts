import * as _path from 'path';
import { Directory } from './directory';
import { parse } from 'url';
/**
pyexamples/objects/attribute_02.py
pyexamples/objects/attribute_05.py
pyexamples/metaclasses/singelton_01.py
pyexamples/metaclasses/singelton_02.py
pyexamples/decorators/property_03.py
pyexamples/decorators/descriptor_02..py

Output is 
  let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
  let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
  let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
  this.directories = [pyexamples]; 
 */

export class ParseProjectFiles {
  dirbase = new Directory('.');

  constructor() {
  }

  getDirBase() {
    return this.dirbase;
  }

  parseFilePath(filepath: Array<string>, directory: Directory) {    
    let name = filepath.shift();

    //console.log("parseFilePath: name = " + name + ", filepath = " + filepath);
    // check if end of the recusive 
    if (filepath.length === 0) {
      //console.log("parseFilePath: name = " + name + ", filepath = " + filepath);
      directory.addFile(name);

      return;
    }
    let subdir = directory.addDirectory(name);
    this.parseFilePath(filepath, subdir);
  }

  parse(filelist: Array<string>) {    
    filelist.forEach(path => {
      //console.log("going to parse: " + path);
      
      this.parseFilePath(path.split('/'), this.dirbase);
    });
    
    this.dirbase.setDirectories();
    
    //this.dirbase.print();
    
    return this.dirbase;
  }  

  print() {    
    this.dirbase.print();
  }
}

// let pyexamples = new Directory('pyexamples');
// pyexamples.addDirectory('decorators');
// pyexamples.addDirectory('metaclasses');

// let decorators = pyexamples.getDirectory('decorators');
// decorators.addFile('decorator_01.py');
// decorators.addFile('decorator_02.py');

// let metaclasses = pyexamples.getDirectory('metaclasses');
// metaclasses.addFile('metaclasses_01.py');
// metaclasses.addFile('metaclasses_02.py');

// let parser = new ParseProjectFiles();
// parser.parse(filelist);
// //parser.print();

// // let decorators = new Directory('decorators',[],['decorator_01.py','decorator_02.py']);
// // let metaclasses = new Directory('metaclasses',[], ['metaclasses_01.py', 'metaclasses_02.py']);
// // let pyexamples = new Directory('pyexamples',[decorators, metaclasses],['main.py']);
// //let directories = pyexamples; 


// console.log("pyexamples = " + JSON.stringify(pyexamples, undefined, 2));
// console.log(JSON.stringify(pyexamples.getDirectory('decorators'), undefined, 2));
// console.log(JSON.stringify(pyexamples.getDirectory('metaclasses'), undefined, 2));

// pyexamples.dirmap.forEach(d => {
//   console.log(`${d.name} = ${JSON.stringify(d.files)}`);
// });
// console.log(JSON.stringify(pyexamples.dirmap.values(), undefined, 2));

