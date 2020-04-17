import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { TestService } from './test.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, UpdateFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TestService]
})
export class AppModule { }
