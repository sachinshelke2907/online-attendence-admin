export interface Employee {
    empId?: string;
    fname: string;
    mname: string;
    lname: string;
    pemail: string;
    oemail: string;
    dob: string;
    typEmployment: string;
    status: string;
    address?: Address;
}

export interface Address {
    addressId: string;
    line1: string;
    line2: string;
    codState: string;
    codCountry: string;
    codPin: string;
    typAddress: string;
    empId: string;
}