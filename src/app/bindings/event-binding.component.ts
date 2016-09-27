import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'ud-event-binding',
  template: `
    <p>
      <button (click)="onclick()">{{text}}</button>
      <button (click)="onclickSecret()">Secret</button>
    </p>
  `,
  styles: []
})
export class EventBindingComponent {
  // we can simply use @Output() which will output the property as secret or we can give it a name:
  @Output("secretmessage") secret =  new EventEmitter<string>(); // or new EventEmitter();
 onclickSecret(){
   this.secret.emit("I'm secretly here by @output emit");
 }



  text ="click me ";

  onclick(){
    if(this.text==="click me"){
      this.text ="clicked";
    }else {
      this.text="click me";
    }

  }
}
