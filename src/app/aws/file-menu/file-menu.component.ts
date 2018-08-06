import { Component, OnInit } from '@angular/core';
import { Directory } from '../../services/directory';
import { Subject } from 'rxjs/Subject';
import { ReadFileHttpClientService } from '../../services/read-file.httpclient.service';

 /* need to get all gists from https://api.github.com/users/tsemach/gists
 * check out https://github.com/jasonhodges/ngx-gist for help about display embeded gist in angular template
 */
@Component({
  selector: 'app-aws-file-menu',
  templateUrl: './file-menu.component.html',
  styleUrls: ['./file-menu.component.css']
})
export class AwsFileMenuComponent implements OnInit {

  fileIsReady = new Subject<string>();  
  directories: Array<Directory>;
  source = '/aws';

  constructor(private readFileService: ReadFileHttpClientService) { }

  ngOnInit() {
    // let cfdir = this.dirbase.addDirectory('CloudFormation');
    // cfdir.addFile('aws-cf-userdata-93.yml', '650757635de8b7bd2122fe706c1fc91b');
    // cfdir.addFile('aws-cf-userdata-92.yml', '1e12f52eda8a37b7ece8b120eb6a1175');


    // let s3dir = this.dirbase.addDirectory('S3');
    // s3dir.addFile('aws-cf-conditions-71.yml', 'e33af3cd1520ed3661a82a4a6361e0cf');
    // s3dir.addFile('aws-cf-userdata-91.sh', '3af2e8250358473df596b3cfddf89447');

    this.readFileService.setBaseUrl("https://api.github.com");
    this.fileIsReady.subscribe(
      (data: string) => {
        //console.log("AngularProjectComponent: data = " + data);
        let gists = JSON.parse(data);         
        this.directories = [ this.parse(gists) ];
        //console.log("AwsFileMenuComponent: data = " + JSON.stringify(gists, undefined, 2));        
      }
    );
    this.readFileService.getFile('users/tsemach/gists', this.fileIsReady);
  }
  
  parse(gists) {
    let dirbase = new Directory('.');
    let cfdir = dirbase.addDirectory('CloudFormation');
    let s3dir = dirbase.addDirectory('S3');

    gists.forEach(e => {
      let filename = Object.getOwnPropertyNames(e.files)[0];      
      let fields = filename.split('-');

      if (fields[0] === 'aws' && fields[1] === 'cf') {
        console.log("AwsFileMenuComponent: cf adding filename = " + filename + ", subject = " + fields[1]);
        cfdir.addFile(filename, e.id);    // let e: ElementRef;
        // e.nativeElement.Renderer2();
    
      }

      if (fields[0] === 'aws' && fields[1] === 's3') {
        s3dir.addFile(filename, e.id);
      }      
      // console.log("AwsFileMenuComponent: data = " + JSON.stringify(e.files, undefined, 2));
    });

    dirbase.setDirectories();

    return dirbase;
  }
}


// {
//   "url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b",
//   "forks_url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b/forks",
//   "commits_url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b/commits",
//   "id": "650757635de8b7bd2122fe706c1fc91b",
//   "node_id": "MDQ6R2lzdDY1MDc1NzYzNWRlOGI3YmQyMTIyZmU3MDZjMWZjOTFi",
//   "git_pull_url": "https://gist.github.com/650757635de8b7bd2122fe706c1fc91b.git",
//   "git_push_url": "https://gist.github.com/650757635de8b7bd2122fe706c1fc91b.git",
//   "html_url": "https://gist.github.com/650757635de8b7bd2122fe706c1fc91b",
//   "files": {
//     "aws-cf-userdata-93.yml": {
//       "filename": "aws-cf-userdata-93.yml",
//       "type": "text/x-yaml",
//       "language": "YAML",
//       "raw_url": "https://gist.githubusercontent.com/tsemach/650757635de8b7bd2122fe706c1fc91b/raw/971f34535c11f8771d8fe8027a0730044025fe19/aws-cf-userdata-93.yml",
//       "size": 1775
//     }
//   },
//   "public": true,
//   "created_at": "2018-07-21T14:06:20Z",
//   "updated_at": "2018-07-21T18:19:16Z",
//   "description": "AWS - CF - USERDATA - create instance with installed packages using CloudFormation:Init",
//   "comments": 0,
//   "user": null,
//   "comments_url": "https://api.github.com/gists/650757635de8b7bd2122fe706c1fc91b/comments",
//   "owner": {
//     "login": "tsemach",
//     "id": 11224584,
//     "node_id": "MDQ6VXNlcjExMjI0NTg0",
//     "avatar_url": "https://avatars0.githubusercontent.com/u/11224584?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/tsemach",
//     "html_url": "https://github.com/tsemach",
//     "followers_url": "https://api.github.com/users/tsemach/followers",
//     "following_url": "https://api.github.com/users/tsemach/following{/other_user}",
//     "gists_url": "https://api.github.com/users/tsemach/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/tsemach/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/tsemach/subscriptions",
//     "organizations_url": "https://api.github.com/users/tsemach/orgs",
//     "repos_url": "https://api.github.com/users/tsemach/repos",
//     "events_url": "https://api.github.com/users/tsemach/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/tsemach/received_events",
//     "type": "User",
//     "site_admin": false
//   },
//   "truncated": false
// },