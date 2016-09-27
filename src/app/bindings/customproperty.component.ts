import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ud-customproperty',
  template: `
    <h2>
      {{result}}
      <ng-content></ng-content>
    </h2>
  `,
  styles: [`
          h2{
          color: coral;
          }`]
})
export class CustompropertyComponent{
  @Input() result:number = 0;

}
