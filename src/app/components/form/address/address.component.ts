import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AddressComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => AddressComponent),
            multi: true
        }
    ]
})
export class AddressComponent implements OnInit, ControlValueAccessor, Validator  {

    addressForm: FormGroup;

    countryList: any = [
        { key: 'IN', value: 'India' },
    ];

    stateList: any = [
        { key: 'MH', value: 'Maharashtra' },
    ];

    constructor(private formBuilder: FormBuilder, private rest: RestService) { }

    ngOnInit(): void {

        this.setCountry();
        
        this.addressForm = this.formBuilder.group({
            address1: ['', [Validators.required,
            Validators.minLength(5)
            ]],
            address2: ['', [Validators.minLength(0)]],
            country: ['', [Validators.required]],
            state: ['', [Validators.required]],
            city: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            pincode: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6)
            ]],
        });
    }

    public onTouched: () => void = () => { };

    writeValue(val: any): void {
        val && this.addressForm.setValue(val, { emitEvent: false });
    }

    registerOnChange(fn: any): void {
        this.addressForm.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        isDisabled ? this.addressForm.disable() : this.addressForm.enable();
    }

    validate(c: AbstractControl): ValidationErrors | null {
        return this.addressForm.valid ? null : { invalidForm: { valid: false, message: "basicInfoForm fields are invalid" } };
    }

    public isValidated = (controlName: string, errorType: string) => {
        return this.addressForm.controls[controlName].hasError(errorType);
    }

    setCountry(): void {
        this.rest.fetchAll('/ref/country');
    }

}
