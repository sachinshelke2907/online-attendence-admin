import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Employee } from "../model/employee.model";
import { url } from "../utils/string.utils";
import { RestService } from "./rest.service";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private rest: RestService) { }

    getEmployeeList(): Employee[] {
        return this.rest.fetchAll(url(environment.EMPLOYEE.LIST)) as Employee[];
    }
}