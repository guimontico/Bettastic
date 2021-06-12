import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BasketGames } from "src/app/models/basketGame";
import { environment } from "src/environments/environment";

const enum leagueId {
    nba = 12,
    euroLeague = 120,
    nbb = 26,
    acb = 117
  }

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    private url = 'https://v1.basketball.api-sports.io/';
    private api_key = environment.api;
    

    constructor(private http: HttpClient) {}

    getNbaGames(todayDate: string): Observable<BasketGames> {
        return this.http.get<BasketGames>(`${this.url}games?date=${todayDate}&league=${leagueId.nba}`, {
          headers: {
            "x-rapidapi-host": "v1.basketball.api-sports.io",
            "api_key": this.api_key
          }
        });
    }
    getEuroLeagueGames(todayDate: string): Observable<BasketGames> {
        return this.http.get<BasketGames>(`${this.url}games?date=${todayDate}&league=${leagueId.euroLeague}`, {
          headers: {
            "x-rapidapi-host": "v1.basketball.api-sports.io",
            "api_key": this.api_key
          }
        });
    }
    getNbbGames(todayDate: string): Observable<BasketGames> {
        return this.http.get<BasketGames>(`${this.url}games?date=${todayDate}&league=${leagueId.nbb}`, {
          headers: {
            "x-rapidapi-host": "v1.basketball.api-sports.io",
            "api_key": this.api_key
          }
        });
    }
    getAcbGames(todayDate: string): Observable<BasketGames> {
        return this.http.get<BasketGames>(`${this.url}games?date=${todayDate}&league=${leagueId.acb}`, {
          headers: {
            "x-rapidapi-host": "v1.basketball.api-sports.io",
            "api_key": this.api_key
          }
        });
    }

}
// ng serve --aot --optimization=false