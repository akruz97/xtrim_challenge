import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInvoice } from '../../../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/user/invoice';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los datos de la factura de un cliente por ID.
   * @param id Identificador del cliente
   * @returns Observable con los datos de la factura
   */
  getInvoice(id: number): Observable<IInvoice> {
    return this.http.get<IInvoice>(`${this.apiUrl}/${id}`);
  }
}
