import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Menu} from 'menu/menu';

@Component({
  selector: 'main',
  directives: [Menu],
  template: `
    <menu></menu>
  `
})

class App {

}

bootstrap(App);
