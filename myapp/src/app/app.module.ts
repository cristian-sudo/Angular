import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaServiceService } from './prova-service.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormComponetComponent } from './form-componet/form-componet.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FormComponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    ProvaServiceService,
    FormComponetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
