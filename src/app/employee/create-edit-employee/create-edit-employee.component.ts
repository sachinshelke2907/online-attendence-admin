import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-edit-employee',
    templateUrl: './create-edit-employee.component.html',
    styleUrls: ['./create-edit-employee.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateEditEmployeeComponent implements OnInit {

    form: FormGroup;

    openSection: string;
    
    genderList: any = [ 'Male', 'Female' ];
    
    employmentTypeList: any = [
        { key: 'P', value: 'Part'},
        { key: 'F', value: 'Full'}
    ];

    profileList: any = [
        { key: 'SD', value: 'Software Developer'},
        { key: 'ACC', value: 'Accountant'}
    ];

    constructor(private formBuilder: FormBuilder, private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {

        this.openSection = 'personal';

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
        const empFormValue = this.form.value;
    }

    onTabClick(section: string, event: any): void {
        this.openSection = section;
        event.preventDefault();
    }

    public isValidated = (controlName: string, errorType: string) => {
        return this.form.controls[controlName].hasError(errorType);
    }

}
