import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Analysis, ApiResponse, LoginResponse, ServerResponse, User } from '../../model/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  
  private apiUrl = "https://localhost:7191/api";

  constructor(private http: HttpClient) { }

  message: string  = "";
  errorMain: any[] = [] ;

  loadAnalysis(): Observable<Analysis[]> {
    return this.http.get<{data: Analysis[]}>(this.apiUrl + "/analysis").pipe(
      map(response => response.data)
    );
  }

  postAnalysis(name: string): Observable<Analysis[]> {
    return this.http.post<Analysis[]>(this.apiUrl + "/analysis/register", {name});
  }

  getAnalysisById(analysisId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/analysis/${analysisId}`);
  }

  loginUser(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/user/login`, { email, password });
  }

  registerUser(userData: User): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(this.apiUrl + "/user/register" , userData);
  }
   
}
  