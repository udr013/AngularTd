import { Component} from '@angular/core';

@Component({
  selector: 'ud-bindings',
  template: `
    <h1>
    Property Binding
    </h1>
    <!--string interpolation-->
    <input type="text" value="{{inputValue}}"/><p>output:{{inputValue}}</p>
    <br>
    <!--now the same thing with property binding, we bind to the value property of the input field!!-->
    <input type="text" [value]="inputValue2"/><p>output:{{inputValue2}}</p>
    <br/>
    <!-- notice the syntax [ngClass]="{cssClass: expression}"  -->
    <p [ngClass]="{styling: true}">Some text styling using boolean with ngClass</p>
    
    <p [ngClass]="{styling: myMethod()}">Some text styling using methodCall to myMethod() with ngClass</p>
    
    <!-- we can also set style directly using [ngStyle]="{style: 'expression' }"
         notice the syntax []="{cssattribute :'' }"-->
    <p [ngStyle]="{color:'green'}"> Some text styled with ngStyle=color:green</p>
    
    <!--here we're binding result to a new value outside the  customproperty.component-->
    <ud-customproperty [result]="10"><h1>we are binding result from outside the component!</h1></ud-customproperty>

  `,
  styles: [`
          .styling{
          color:darkred;
          }
`]
})
export class BindingsComponent  {
   inputValue = " stringInterpolation";
  inputValue2 =  " property binding"

  myMethod(){
    return true;
  }


}
