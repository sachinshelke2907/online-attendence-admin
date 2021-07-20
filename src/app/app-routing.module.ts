import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEditDepartmentComponent } from './department/create-edit-department/create-edit-department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { CreateEditEmployeeComponent } from './employee/create-edit-employee/create-edit-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
    { path : '', component : DashboardComponent },
    { path : 'employee', component : EmployeeListComponent },
    { path : 'employee/register', component : CreateEditEmployeeComponent },
    { path : 'department', component : DepartmentListComponent },
    { path : 'department/add', component : CreateEditDepartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
