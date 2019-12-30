import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CreateComponent} from './create/create.component';


const routes: Routes = [
  {path: 'app-list', component: AppComponent},
  {path: 'app-create', component: CreateComponent},
  // {path: 'edit/:id', component: ItemEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
