import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateEditDepartmentComponent } from './department/create-edit-department/create-edit-department.component';
import { CreateEditEmployeeComponent } from './employee/create-edit-employee/create-edit-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
    // { path : '', component : AppComponent },
    { path : 'employee', component : EmployeeListComponent },
    { path : 'employee/register', component : CreateEditEmployeeComponent },
    { path : 'department/add', component : CreateEditDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
