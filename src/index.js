import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Ng2} from 'ng-2/ng-2';
import {Demo} from 'demo/demo';

@Component({
  selector: 'main'
})

@View({
  directives: [Ng2, Demo],
  template: `
    <ng-2></ng-2>
    <demo size="x"></demo>
  `
})

class Main {

}

bootstrap(Main);
