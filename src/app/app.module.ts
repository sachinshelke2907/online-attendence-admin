import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateEditEmployeeComponent } from './employee/create-edit-employee/create-edit-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './components/form/address/address.component';
import { CreateEditDepartmentComponent } from './department/create-edit-department/create-edit-department.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        CreateEditEmployeeComponent,
        EmployeeListComponent,
        AddressComponent,
        CreateEditDepartmentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        NgxDaterangepickerMd.forRoot({
            separator: ' - ',
            applyLabel: 'Okay',
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
