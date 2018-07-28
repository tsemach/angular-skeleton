

export class PythonCodeParser {
  _code = '';
  _description = '';
  _output = '';
  _from = '';

  constructor() {
  }
  
  get description() {
    return this._description;
  }

  set description(_description) {
    this._description = _description;
  }

  get output() {
    return this._output;
  }

  set output(_output) {
    this._output = _output;
  }

  get code() {
    return this._code;
  }

  set code(_code) {
    this._code = _code;
  }

  get from() { 
    return this._from;
  }

  toString(a: Array<string>) {
    let s = '';
    a.forEach(e => {
      if (s.length > 0) {
        s = s + '\n';
      }
      s = s + e;
    });
    return s;
  }

  parse(_code: string) {
    let state =  1;
    let code = '';
    this._from = '';
    
    let a = _code.split('\n');
    let descriptionArray = new Array<string>();
    let outputArray = new Array<string>();
    let codeArray = new Array<string>();    

    // a.forEach(e => {
    //   console.log("line is: " + e);      
    // });

    a.forEach(e => {      
      switch (state) {
      case 1:
        this._description = '';
        if (e.includes('<description>')) {
          state = 2; 

          break;
        }
        codeArray.push(e);
      break;
      case 2: 
        if (e.includes('</description>')) {          
          state = 4;
  
          break;
        }
        if (e.includes('from: ')) {
          console.log(`PARSE: found from: ${e.split(' ')[1]}`);
          this._from = e.split(' ')[1];
        }
        descriptionArray.push(e);
        codeArray.push(e);
        break;
      case 4: 
        this._output = '';
        if (e.includes('<output>')) {
          state = 5; 
        }
      break;
      case 5: 
        if (e.includes('</output>')) {
          state = 7;
  
          break;
        }
        console.log("in output e  = " + e);
        outputArray.push(e);
      break;
      case 7:
        codeArray.push(e);
      break;
      }
    });
    this.code = this.toString(codeArray);
    this.description = this.toString(descriptionArray);
    this.output = this.toString(outputArray);

    return this._code;
  }
}

// console.log("python code parser");
// let code = `\
// /* 
//  * <description> 
//  * begine desc dsdvsdvs
//  * sdvsdv
//  * SHARED_FORM_DIRECTIVESvs
//  * end of descripo 
//  * </description> 
//  * 
//  * <output> 
//  * outpur 1 
//  * ouptput 3
//  * 
//  * </output> 
//  let p = 10;

//  function a)()
//  {dv
// sdv
// sv
// s}
//  * 
// `;
// let p = new PythonCodeParser();
// let c = p.parse(code);

// console.log("code = " + c);






