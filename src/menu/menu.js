import {Component, View, Input} from 'angular2/core';

@Component({
  selector: 'demo'
})

@View({
  inputs: ['size'],
  template: `
    <div>
      <em>I am the Demo #{{ now }}. Here's my list:</em>
      <strong>dasfasdf</strong>
      <ul>
        <li *ngFor="#item of items">{{ item }}</li>
      </ul>
      <input #newItemNode>
      <input [(ngModel)]="newItem">
      <button (click)="(addItem(newItem))">Add</button>
    </div>
  `,
  directives: Demo
})

export class Demo {
  constructor() {
    Object.assign(this, {
      now: Date.now(),
      items: ['Milk', 'Soy', 'Happiness'],
      newItem: '',
      size: "none"
    });

    console.info('Demo Component Mounted Successfully');
  }

  addItem(item) {
    this.items.push(item);
  }
}
