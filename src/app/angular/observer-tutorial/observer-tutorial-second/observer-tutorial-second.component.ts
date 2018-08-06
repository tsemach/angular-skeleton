import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-observer-tutorial-second',
  templateUrl: './observer-tutorial-second.component.html',
  styleUrls: ['./observer-tutorial-second.component.css']
})
export class AngularObserverTutorialSecondComponent implements OnInit {
  config_code = {    
    lineNumbers: true,    
    tabSize: 2,  
    readOnly: true
  };

  second_define_subject_code_1 = 
  `
  import { Subject } from 'rxjs/Subject';

  /**
   * Simple service hodling the Subject. It can be 
   * any class member or any variable.
   * /
  export class SubjectService {
    /**
     * A Subject is an Observable and Observer in the same time 
     * (the one that generate the data and one that receive it)
     */
    subjectActivated = new Subject();
  }
  `;

  second_define_subject_code_2 = 
  `
  this.subjectService.subjectActivated.subscribe(
    (id: number) => {
      if (id === 1) {
        this.something = true;
      }
      else if (id === 2) {
        this.something = true;
      }
    }
  );
  `;

  second_define_subject_code_3 = 
  `
  /**
   * Assume on some event you want to publish a data stream (much like previous example).
   * 'SubjectService' is using Observer. the 'subjectActivated.next' method 
   * create a data source of "this.id"
   *
   * Now everyone to subscribe to subjectActivated of that service instance 
   * can receive the data.
   */
  onActivate() {    
    this.subjectService.subjectActivated.next(this.id);
  }
  `;

  second_define_subject_explain_1 = 
  `
  'Subject': create by new Subject(); from 'rxjs/Subject' 

   Now the subject is ready to use with '.next' and '.subscribe' methods.
  `;

  second_define_subject_explain_2 = 
  `
  'subscribe': In some other part of the code use the '.subscribe' 
  method of the subject to listen to data sending by 
  this very own subject.

  'Note': this subscription is register only the data handler callback.
  `;

  second_define_subject_explain_3 = 
  `
  'publish a data': calling to '.next' with some date send a data package
  to every consumer who 'sit' on this subscribe, meaning some who 
  call to subscribe on this subject.
  `;

  constructor() { }

  ngOnInit() {
    // let code_len = this.second_define_subject_code_1.split('\n').length;
    // let explain_len = this.second_define_subject_explain_1.split('\n').length

    // if (code_len > explain_len) {
    //   for (let i = 0; i < code_len - explain_len; i++) {
    //     this.second_define_subject_explain_1 += '\n';
    //     console.log("add space i = " + i);
    //   }
    // }

    this.second_define_subject_explain_1 = this.adjectLines(
      this.second_define_subject_code_1,
      this.second_define_subject_explain_1
    );

    this.second_define_subject_explain_2 = this.adjectLines(
      this.second_define_subject_code_2,
      this.second_define_subject_explain_2
    );

    this.second_define_subject_explain_3 = this.adjectLines(
      this.second_define_subject_code_3,
      this.second_define_subject_explain_3
    );
    
  }

  adjectLines(src: string, dst: string) {
    let code_len = src.split('\n').length;
    let explain_len = dst.split('\n').length

    if (code_len > explain_len) {
      for (let i = 0; i < code_len - explain_len; i++) {
        dst += '\n';
      }
    }  

    return dst;
  }


}
