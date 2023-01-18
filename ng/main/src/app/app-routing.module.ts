import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListviewComponent} from "./listview/listview.component";
import {TodoViewComponent} from "./todoview/todoview.component";
import {TododetailComponent} from "./tododetail/tododetail.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list', component: ListviewComponent},
  {path: 'list/:id', component: TodoViewComponent},
  {path: 'todo/:id', component: TododetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListviewComponent,TodoViewComponent];
