import {Component, View, Input} from 'angular2/core';

var menu = [{
  title: "Menu item 1",
  link: null,
  items: [{
    title: "SubMenu item 1",
    link: null,
    items: [{
      title: "SubSubMenu item 1",
      link: null,
      items: [],
    }, {
      title: "SubSubMenu item 2",
      link: null,
      items: [],
    }],
  }],
}, {
  title: "Menu item 2",
  link: null,
  items: [],
}, {
  title: "Menu item 3",
  link: null,
  items: [{
    title: "SubMenu item 3",
    link: null,
    items: [],
  }],
}];

@Component({
  inputs: ['title', 'link', 'items'],
  selector: 'menu',
  template: `
    <ul>
      <li *ngFor="#item of items" (click)="onToggleSubmenu($event, item)" [class.open]="item.showSubmenu">
        <a [attr.href]="link" [class.clickable]="hasItems(item)">{{ item.title }}</a>
        <menu [items]="item.items"></menu>
      </li>
    </ul>
  `,
  directives: [Menu]
})

export class Menu {
  constructor() {
    Object.assign(this, {
      items: menu,
    });

    console.info('Menu Component Mounted Successfully');
  }

  hasItems (menu) {
    return menu.items && menu.items.length;
  }

  onToggleSubmenu(event, item) {
    event.stopPropagation();

    if (!item.items.length) {
      return;
    }

    item.showSubmenu = !item.showSubmenu;
  }
}
