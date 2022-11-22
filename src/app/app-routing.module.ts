import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './ui/employee-list/employee-list.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';

const routes: Routes = [{ path: 'HttpClient', component: EmployeeListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
