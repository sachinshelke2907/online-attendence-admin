import { Component, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { headerList, employeeList1 } from '../employee.mock';
// import { employeeList } from './employee-list.component.mock';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    @Output() moduleName: string = "Employee List";

    paginationSize: number;

    employeeList: any = [];

    constructor() { }

    // columnDefs = [
    //     { field: 'make' },
    //     { field: 'model' },
    //     { field: 'price'}
    // ];
    columnDefs = headerList;

    // rowData = [
    //     { make: 'Toyota', model: 'Celica', price: 35000 },
    //     { make: 'Ford', model: 'Mondeo', price: 32000 },
    //     { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];

    ngOnInit(): void {
        this.paginationSize = environment.paginationSize;
        this.onLoad();
    }

    onLoad(): void {
        let emp: any;
        let index = 0;
        for(let employee of employeeList1) {
            console.log(employee);
            emp = {
                '#': (index + 1),
                'Name': this.getFullName(employee),
                'Designation': employee.designation,
                'Personal Email': employee.pemail,
                'Official Email': employee.oemail,
                'Mobile No': employee.primaryNo,
                'Action': employee.action,
            }
            console.log(emp);
            this.employeeList.push(emp);
        }

        // this.employeeList = employeeList;
    }

    public getFullName(employee: any): string {
        let fullName = '';
        fullName = employee.fname;
        fullName = fullName + ' ' + employee.mname;
        fullName = fullName.trim() + ' ' + employee.lname;
        fullName = fullName.trim();

        return fullName;
    }
}
