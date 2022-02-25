import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { environment } from 'src/environments/environment';
import { headerList, employeeList1 } from '../employee.mock';
// import { employeeList } from './employee-list.component.mock';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    @Output()
    moduleName: string = "Employee List";

    paginationSize: number;

    employeeList: any = [];

    constructor(private empService: EmployeeService) { }

    columnDefs = headerList;
    ngOnInit(): void {
        this.paginationSize = environment.paginationSize;
        this.onLoad();
    }

    onLoad(): void {

        let index = 0;
        const empList = this.empService.getEmployeeList();
        for (let empInfo of empList) {
            this.employeeList.push({
                '#': (index + 1),
                'Name': this.getFullName(empInfo),
                'Designation': '--',
                'Personal Email': empInfo.pemail,
                'Official Email': empInfo.oemail,
                'Mobile No': empInfo.fname,
                'Action': empInfo.fname,
            });
        }
    }

    private getFullName(employee: any): string {
        let fullName = '';
        fullName = employee.fname;
        fullName = fullName + ' ' + employee.mname;
        fullName = fullName.trim() + ' ' + employee.lname;
        fullName = fullName.trim();

        return fullName;
    }
}
