/**
 * PlanService
 *
 * Servicio para gestionar operaciones relacionadas con los planes.
 * Incluye métodos para obtener los datos de un plan
 */
import { Injectable } from '@angular/core';
import { IPlan } from '../../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private apiUrl = 'http://127.0.0.1:8000/api/user/plan';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los datos del plan de un cliente por ID.
   * @param id Identificador del cliente
   * @returns Observable con los datos del plan
   */
  getPlan(id: number): Observable<IPlan> {
    return this.http.get<IPlan>(`${this.apiUrl}/${id}`);
  }
}
