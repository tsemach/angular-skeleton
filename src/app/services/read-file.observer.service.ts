import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as marked from 'marked';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadFileService {
    private base = 'https://raw.githubusercontent.com/tsemach/';
    private cached = new Map<string, string>();

    constructor(private http: HttpClient) {
        marked.setOptions({});
    }

    /**     
     * @param project a github project to work with
     */
    setProject(project: string) {
      this.base = this.base.concat(project + '/master');
      console.log("ReadFileService:setProject: this.base = " + this.base);
    }

    /**
     * retreive a file from github
     * @param file the relative path of a file in github project
     */
    getFile(file: string): Observable<string> {
      let url = this.base + file;
      if (this.cached.has(file)) {
        return Observable.of(this.cached[file]);
      }

      return Observable.merge(
        Observable.of('Loading..'),
        this.http.get(url, {responseType: 'text'})
          .map(file => {
            if (file.endsWith('.md')) {
              this.cached[file] = marked(file);
              return this.cached[file];
            }
            this.cached[file] = file;
            return this.cached[file];
          })
          .catch(error => Observable.of(`Error:<br>Unable to retrieve ${file} from github..<br>Please go to <a href="${ url }">${ url }</a> to view it.`))
      );
    }

}