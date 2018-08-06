import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AngularProjectNameService {
  
  private _name: string = '';

  nameUpdated = new EventEmitter<string>();

  constructor() {}
  
  get name() {
    return this._name;
  }
  
  set name(_name: string) {
    this._name = _name;
  }
}