import {Component, View} from 'angular2/core';

@Component({
  selector: 'ng-2'
})

@View({
  templateUrl: 'ng-2/ng-2.html'
})

export class Ng2 {

  constructor() {
    console.info('Ng2 Component Mounted Successfully');
  }

}
