import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ud-two-way-binding',
  template: `
    <div>
    <h1>Two way binding using [(ngModel)]</h1>
    <p>
      <input [(ngModel)]="person.firstName"/>
      <input [(ngModel)]="person.firstName"/>
     </p>
    </div>
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    firstName: "mark",
    age: 43
  }


}
