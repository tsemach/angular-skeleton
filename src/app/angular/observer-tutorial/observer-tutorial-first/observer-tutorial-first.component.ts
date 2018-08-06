import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-observer-tutorial-first',
  templateUrl: './observer-tutorial-first.component.html',
  styleUrls: ['./observer-tutorial-first.component.css']
})
export class AngularObserverTutorialFirstComponent implements OnInit {
  config_code = {    
    lineNumbers: true,    
    tabSize: 2,  
    readOnly: true
  };

  first_define_observable_code_1 = 
  `
  createStringObservable() {
    /**
     * Create a new observerable, note the observer is the pass as aurgument.
     * it create the data source.mb-1
     */
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      // you can use error OR completed method to finish the observer.
      // NOTE: but not both of them 
      setTimeout(() => {
        observer.error('this is not working');
      }, 5000);      
      setTimeout(() => {
        observer.complete();
    }, 6000);
  });
  `;

  first_define_observable_code_2 = 
  `
  /**
   * Create the Observer (the receiver). It define 3 methods, the data, 
   * the error and the complation.
   */
  this.customObservableSubscription = myObservable.subscribe(
    (data: string) => { console.log(data) },
    (error: string) => { console.log(error) },
    () => { console.log('completed')}
  );
  `;

  first_define_observable_explain_1 = 
  `
  'Observerable': Use 'Observable.create' function from 'rxjs/Observable' to 
  create an observable.
  Note it take an Observer as it aurgument. 
  An observer is the one that subscript (listen) to data packages coming 
  from observable.

  This simple example create an observable that generate string data stream 
  until it completed.

  'observer.complete()' - complete the data stream. 
  this will call the complete callback on the subscriber.

  'observer.error("this is not working");' - this will call the error handler (callback)
  on the subscriber (the observer).
  `;

  first_define_observable_explain_2 = 
  `
  'Observer': this is the receiving part. It subscribe to data coming on the first method.
  
  Also listen to error event and completion on the second and
  third methods.
  `;

  constructor() { }

  ngOnInit() {
    // let code_len = this.first_define_observable_code_1.split('\n').length;
    // let explain_len = this.first_define_observable_explain_1.split('\n').length

    // if (code_len > explain_len) {
    //   for (let i = 0; i < code_len - explain_len; i++) {
    //     this.first_define_observable_explain_1 += '\n';
    //     console.log("add space i = " + i);
    //   }
    // }

    this.first_define_observable_explain_1 = this.adjectLines(
      this.first_define_observable_code_1,
      this.first_define_observable_explain_1
    );

    this.first_define_observable_explain_2 = this.adjectLines(
      this.first_define_observable_code_2,
      this.first_define_observable_explain_2
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
