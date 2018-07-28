
export class Directory {
  name: string;
  dirmap = new Map<string, Directory>();  
  directories: Array<Directory>;
  files: Array<string> = new Array<string>();
  ids = new Map<string, string>();  
  fullpath = '';

  constructor(name, fullpath?) {
      this.name = name;
      if (fullpath === undefined || fullpath === '.') {
        this.fullpath = name;        
      }
      else {
        this.fullpath = fullpath + '/' + name;
      }
  }

  getGetDirMap() {
    return this.dirmap;
  }  

  setDirectories() {
    this.directories = new Array<Directory>();
    
    this.dirmap.forEach((sub: Directory, dir: string) => {
      
      this.directories.push(sub);
      sub.setDirectories();
    });         
  }

  addDirectory(name: string) {
    if (this.dirmap.get(name)) {
      return this.dirmap.get(name);
    }
    this.dirmap.set(name, new Directory(name, this.fullpath));

    return this.getDirectory(name);
  }

  getDirectory(name: string) {
    if (this.dirmap.get(name) === undefined) {
      throw new Error(`unable to find directory '${name}' in '${this.name}'`);
    }
    return this.dirmap.get(name);
  }
  
  addFile(name: string, id?: string) {
    if (id !== undefined) {
      this.ids.set(name, id);
      console.log("directory: setting file " + name + " with id = " + id);
      console.log("directory: setting file " + name + " with id = " + this.getId(name));
    }
    //console.log("Directory:addFile: this.name = <" + this.name + ">, name = " + name);
    this.files.push(name);
  }

  getId(name: string) {
    let id = this.ids.get(name)
    return id !== undefined ? id : "undefined";
  }

  print(tabs: string = '') {
    if (this.name  !== '.') {
      console.log(tabs + this.name + ":");
    }
    if (this.name  !== '.') {
      tabs = tabs + "\t";
    }
    for (let f in this.files) {
      if (this.files[f].length > 0) {
        console.log(tabs + this.files[f]);
      }
    }
    this.dirmap.forEach((value: Directory, key: string) => {      
      value.print(tabs);
    });

    // for (let i in this.directories) {
    //   console.log("directories: " + this.name + ", dir = " + this.directories[i]);
    // }
  }
}
