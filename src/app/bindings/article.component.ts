import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ud-article',
  template: `
    <article>
    <header>This header is followed by ng-content</header>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
          header{
                color:rebeccapurple;
          }
          article{
                  border: dotted slategrey;
                  color:red;
          }`]
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
