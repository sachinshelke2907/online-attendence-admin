import { environment } from "src/environments/environment";

export function url(subUrl: string, mainUrl?: string): string {
    if(mainUrl) {
        return (mainUrl + '/' + subUrl);
    }
    return (environment.API_BASE_URL + '/' + subUrl);
}