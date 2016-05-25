import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tab-group-demo',
  template: require('./tab-group.component.html'),
  styles: [require('./tab-group.component.css')],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupDemoComponent {
  tabs = [
    { label: 'Tab One', content: 'This is the body of the first tab' },
    { label: 'Tab Two', content: 'This is the body of the second tab' },
    { label: 'Tab Three', content: 'This is the body of the third tab' },
  ];
}
