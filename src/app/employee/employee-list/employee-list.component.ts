import { Component, OnInit, Output } from '@angular/core';
import { employeeList } from './employee-list.component.mock';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    @Output() moduleName: string = "Employee List";

    employeeList: any = [];

    constructor() { }

    ngOnInit(): void {
        this.onLoad();
    }

    onLoad(): void {
        this.employeeList = employeeList;
    }

    public getFullName(employee: any): string {
        let fullName = '';
        fullName = employee.fname.trim();
        fullName = fullName + ' ' + employee.mname;
        fullName = fullName.trim() + ' ' + employee.lname;
        fullName = fullName.trim();

        return fullName;
    }
}
