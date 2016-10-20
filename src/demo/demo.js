import {Component, View, Input} from 'angular2/core';

@Component({
  inputs: ['size'],
  selector: 'demo',
  template: `
    <div>
      <em>I am the Demo #{{ now }}. Here's my list:</em>
      <strong>My size is {{size}} large</strong>
      <ul>
        <li *ngFor="#item of items">{{ item }}</li>
      </ul>
      <input #newItemNode>
      <input [(ngModel)]="newItem">
      <button (click)="(addItem(newItemNode.value))">Add</button>
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
      size: 0,
    });

    console.info('Demo Component Mounted Successfully');
  }

  addItem(item) {
    if (item) {
      this.items.push(item);
    }
    if (this.newItem) {
      this.items.push(this.newItem);
    }
  }
}
