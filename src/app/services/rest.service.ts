import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private httpClient: HttpClient) {
    }

    /**
     * This method used to post rest call
     * 
     * @param inputData 
     * @param outputData 
     */
    create(restURL: string, inputData: any): any {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        };

        this.httpClient.post<any>(this.url(restURL), JSON.stringify(inputData), {
            headers: headers
        }).subscribe(responseData => {
            return responseData;
        });
    }

    /**
     * 
     * @param restURL 
     * @returns 
     */
    fetchAll(restURL: string): any {

        console.log(restURL);

        return this.httpClient.get<any>(this.url(restURL)).pipe(
            map(responseData => {
                const result: any[] = [];

                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        result.push({ ...responseData[key], id: key });
                    }
                }

                return result;
            }),
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }

    url(restUrl: string): string {
        return environment.base1Url + restUrl;
    }

}