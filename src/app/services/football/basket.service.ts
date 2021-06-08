import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class BasketService {
    url = 'https://v1.basketball.api-sports.io/';
    
    constructor(private http: HttpClient) {}

    getGamesFromDate(date: String, league: String, season: String): Observable<any> {
        return this.http.get<[]>(`${this.url}games?date=${date}&league=${league}&season=${season}`, {
            headers: {
                "x-rapidapi-host": "v1.basketball.api-sports.io",
                "x-rapidapi-key": "f24bb926904b30370886078867b9de5c"
            }
        })
    }

}
// ng serve --aot --optimization=false