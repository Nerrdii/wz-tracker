import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStats } from '../interfaces/stats';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getWarzoneStats(gamertag: string, platform: string) {
    return this.http.get<IStats>(
      `${environment.baseApiUrl}/warzone/${gamertag}/${platform}`,
      {
        headers: {
          'x-rapidapi-host': environment.apiHost,
          'x-rapidapi-key': environment.apiKey,
        },
      }
    );
  }
}
