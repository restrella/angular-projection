import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotComponent } from './multi-slot/multi-slot.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { ChildComponent } from './child/child.component';
import { ViewExampleComponent } from './view-example/view-example.component';
import { ChildContentComponent } from './child-content/child-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    TemplateExampleComponent,
    ChildComponent,
    ViewExampleComponent,
    ChildContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
