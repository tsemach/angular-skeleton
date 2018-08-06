import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as marked from 'marked';

@Injectable()
export class ReadFileHttpClientService {
    private base = 'https://raw.githubusercontent.com/tsemach/';
    private cached = new Map<string, string>();    

    httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
      })
    };

    constructor(private http: HttpClient) {
        marked.setOptions({});
    }

    /**
     * 
     */
    setBaseUrl(base: string) {
      this.base = base;
    }

    /**     
     * @param project a github project to work with
     */
    setProject(project: string) {
      this.base = 'https://raw.githubusercontent.com/tsemach/'.concat(project + '/master');
      console.log("ReadFileService:setProject: this.base = " + this.base);
    }
    
    /**
     * retreive a file from github
     * @param file the relative path of a file in github project
     */
    getFile(filename: string, fileIsReady: Subject<string>) {
      let fullurl = this.base + '/' + filename; 
      
      console.log("ReadFileHttpClientService:getFile: fillurl = " + fullurl);
      if (this.cached.has(fullurl)) {
        return this.cached.get(fullurl);
      }      

      let file = this.http.get(fullurl, {responseType: 'text'});
      file.subscribe(data => {           
          if (data.endsWith('.md')) {
            this.cached[fullurl] = marked(data);            
          }
          else {
            this.cached[fullurl] = file;
          }          

          fileIsReady.next(data);
        },
        (error) => console.log(error)
      );
    } 

}