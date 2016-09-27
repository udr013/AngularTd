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
          }`],
  //if we use imports metadata here we don't need to use the @Input before the property in the class though it is said @Input is the better solution ?
  inputs:['result']
})
export class CustompropertyComponent{
  // @Input()
  result:number = 0;

}
