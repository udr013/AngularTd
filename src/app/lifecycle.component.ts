import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, SimpleChanges, Input
} from '@angular/core';

@Component({
  selector: 'ud-lifecycle',
  template: `
    
      <ng-content></ng-content>
      <hr>
      <p>{{binding}}</p>
      <br>
      <br>
    
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() binding = 1000;
  constructor() { }


  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  private log(hook:string){
    console.log(hook)
  }
}
