import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class FootballService {
    url = 'https://v3.football.api-sports.io/';
    
    constructor(private http: HttpClient) {}

    getTeam(teamId: Number): Observable<any> {
        return this.http.get<[]>(`${this.url}teams?id=${teamId}`, {
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "f24bb926904b30370886078867b9de5c"
            }
        })
    }

}