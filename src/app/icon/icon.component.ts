import {Component, ViewEncapsulation} from '@angular/core';
import {MdIconRegistry} from '@angular2-material/icon/icon';

@Component({
  selector: 'md-icon-demo',
  template: require('./icon.component.html'),
  styles: [require('./icon.component.css')],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
})
export class IconDemoComponent {
  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry
        .addSvgIcon('thumb-up', '/icon/assets/thumbup-icon.svg')
        .addSvgIconSetInNamespace('core', '/icon/assets/core-icon-set.svg')
        .registerFontClassAlias('fontawesome', 'fa');
  }
}
