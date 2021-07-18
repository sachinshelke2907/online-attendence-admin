import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-edit-department',
    templateUrl: './create-edit-department.component.html',
    styleUrls: ['./create-edit-department.component.scss']
})
export class CreateEditDepartmentComponent implements OnInit {

    form: FormGroup;

    mainDepartmentList: any = [
        { key: 'D1', value: 'Department 1'}
    ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.form = this.formBuilder.group({
            name: ['', [ Validators.required ]],
            mainDepartment: ['', [ Validators.required ]],
        });
    }

    onSubmit(): void {
        const departmentFormValue = this.form.value;
        console.log(departmentFormValue);
    }

}
