import { Injectable } from '@angular/core';
import { IConsumption } from '../../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsumptionService {
  private apiUrl = 'http://127.0.0.1:8000/api/consumption';
  private cosumption: IConsumption | undefined = undefined;

  constructor(private http: HttpClient) {}

  getConsumption(id: number): Observable<IConsumption> {
    return this.http.get<IConsumption>(`${this.apiUrl}/${id}`);
  }
}
