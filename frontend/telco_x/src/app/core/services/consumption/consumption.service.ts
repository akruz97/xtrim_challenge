/**
 * ConsumptionService
 *
 * Servicio para gestionar los consumos de clientes
 * Incluye un método de obtención de consumos
 */
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

  /**
   * Obtiene los consumos de un cliente por ID.
   * @param id Identificador del cliente
   * @returns Observable con los datos de consumo del cliente
   */
  getConsumption(id: number): Observable<IConsumption> {
    return this.http.get<IConsumption>(`${this.apiUrl}/${id}`);
  }
}
