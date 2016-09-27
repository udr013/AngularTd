import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
<!--   title is  set by databinding  String interpolation{{}}   and number interpolation, automatically casted to string      -->
            {{title}}{{number}}
          </h1>
          <ud-bindings><h1>blabla</h1></ud-bindings>
          <ud-article><h1>here is a h1 inside ud-article!</h1></ud-article>
`,
  //notice style gets only applied to the h1 of this template not the <h1> in <ud-bindings> this is View Encapsulation
  styles: [`
          h1{
            color:Blue;
          }`
          ]
})
export class AppComponent {
  //properties:
  title = 'This is build with Angular ';
  number =2;
}
