import { Injectable } from '@angular/core';
import { IPlan } from '../../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private apiUrl = 'http://127.0.0.1:8000/api/user/plan';
  private profile: IPlan | undefined = undefined;

  constructor(private http: HttpClient) {}

  getPlan(id: number): Observable<IPlan> {
    return this.http.get<IPlan>(`${this.apiUrl}/${id}`);
  }
}
