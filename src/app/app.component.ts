import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
<!--   title is  set by databinding  String interpolation{{}}   and number interpolation, automatically casted to string      -->
            {{title}}{{number}}
          </h1>
          <ud-bindings><h1>blabla</h1></ud-bindings>
          <ud-article (secretmessage)="onclickSecret($event)"><h1>here is a h1 inside ud-article!</h1></ud-article>
          <h2>{{value}}</h2>
          <h1>Event binding</h1>
          <!--  with $event we can extract the data we emit in this method-->
          <ud-event-binding (secretmessage)="onclickSecret($event)"></ud-event-binding>
          <ud-two-way-binding></ud-two-way-binding>
          <ud-lifecycle *ngIf="!delete"><h1>Lifecycle example.</h1></ud-lifecycle>
          <!--reserved keyword used as name-->
          <button (click)="delete = true" >Click to delete lifecycle.component from this view</button> 
`,
  //notice style gets only applied to the h1 of this template not the <h1> in <ud-bindings> this is View Encapsulation
  styles: [`
          h1{
            color:Blue;
          }
          h2{
          color: darkgoldenrod;
          }`]
})
export class AppComponent {
  delete= false;
  //properties:
  title = 'This is build with Angular ';
  number =2;
  value ="";
  //we need to catch the value here recalling  method
  onclickSecret(value:string){
    this.value = value;
  }
}

