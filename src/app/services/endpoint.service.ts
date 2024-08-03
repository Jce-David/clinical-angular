import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { Analysis } from '../model/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  
  private apiUrl = "https://localhost:7191/api";

  constructor( private http: HttpClient ) { }


  loadAnalysis(): Observable<Analysis[]> {
    return this.http.get<{data : Analysis []}>(this.apiUrl + "/analysis").pipe(
      map(response => response.data)
    )
  }
  postAnalysis(name: string) : Observable<Analysis []>{
    return this.http.post<Analysis[]>(this.apiUrl + "/analysis/register", {name});
  }
  getAnalysisById(analysisId: number): Observable<Analysis> {
    return this.http.get<Analysis>(`${this.apiUrl}/analysis/${analysisId}`)
  }


}
