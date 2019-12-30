import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { WorkerElementComponent } from './worker-element/worker-element.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/pipe.pipe';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    WorkerElementComponent,
    FilterPipe,
    HeaderComponent,
    CreateComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
