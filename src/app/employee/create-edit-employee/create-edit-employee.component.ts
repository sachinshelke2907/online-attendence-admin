import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import * as moment from 'moment';

@Component({
    selector: 'app-create-edit-employee',
    templateUrl: './create-edit-employee.component.html',
    styleUrls: ['./create-edit-employee.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CreateEditEmployeeComponent implements OnInit {

    form: FormGroup;

    openSection: string;

    genderList: any = ['Male', 'Female'];

    employmentTypeList: any = [
        { key: 'P', value: 'Part' },
        { key: 'F', value: 'Full' }
    ];

    profileList: any = [
        { key: 'SD', value: 'Software Developer' },
        { key: 'ACC', value: 'Accountant' }
    ];

    constructor(private formBuilder: FormBuilder, private elementRef: ElementRef, private renderer: Renderer2, private rest: RestService) { }

    ngOnInit(): void {

        this.setCountry();

        this.openSection = 'personal';

        this.form = this.formBuilder.group({
            fname: ['', [Validators.required]],
            mname: [''],
            lname: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            profileId: ['', [Validators.required]],
            employmentType: ['', [Validators.required]],
            primaryMobileNo: ['', [Validators.required]],
            pemail: ['', [Validators.required]],
            secondaryMobileNo: [''],
            oemail: [''],
            address: new FormControl(),
        });
    }

    onSubmit(): void {
        const empFormValue = this.form.value;
        empFormValue.dob = moment(empFormValue.dob.startDate).format('YYYY-MM-DD');
        this.rest.create('employee', empFormValue);
    }

    onTabClick(section: string, event: any): void {
        this.openSection = section;
        event.preventDefault();
    }

    public isValidated = (controlName: string, errorType: string) => {
        return this.form.controls[controlName].hasError(errorType);
    }

    setCountry(): void {
        console.log(this.rest.fetchAll('/ref/country'));
    }
}
