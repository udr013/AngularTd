import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ArticleComponent } from './bindings/article.component';
import { CustompropertyComponent } from './bindings/customproperty.component';
import { EventBindingComponent } from './bindings/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    ArticleComponent,
    CustompropertyComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
