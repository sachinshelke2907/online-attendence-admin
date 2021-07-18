import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-edit-employee',
    templateUrl: './create-edit-employee.component.html',
    styleUrls: ['./create-edit-employee.component.scss']
})
export class CreateEditEmployeeComponent implements OnInit {

    form: FormGroup;
    
    genderList: any = [ 'Male', 'Female' ];
    
    employmentTypeList: any = [
        { key: 'P', value: 'Part'},
        { key: 'F', value: 'Full'}
    ];

    profileList: any = [
        { key: 'SD', value: 'Software Developer'},
        { key: 'ACC', value: 'Accountant'}
    ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.form = this.formBuilder.group({
            fname: [ '', [Validators.required]],
            mname: [ '' ],
            lname: [ '', [Validators.required]],
            gender: [ '', [Validators.required]],
            dob: [ '', [Validators.required]],
            profile: [ '', [Validators.required]],
            employmentType: [ '', [Validators.required]],
            primaryMobileNo: [ '', [Validators.required]],
            personalEmail: [ '', [Validators.required]],
            secondaryMobileNo: [ '' ],
            secondaryEmail: [ '' ],
            address: new FormControl(),
        });
    }

    onSubmit(): void {
        alert('test');
        const empFormValue = this.form.value;
        console.log(empFormValue);
    }

}
