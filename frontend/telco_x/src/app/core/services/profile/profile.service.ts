/**
 * ProfileService
 *
 * Servicio para gestionar operaciones relacionadas con perfiles de usuario.
 * Incluye métodos para obtener los datos de un perfil.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../../../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://127.0.0.1:8000/api/user';
  private profile: UserProfile | undefined = undefined;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los datos de perfil de un cliente por su ID.
   * @param id Identificador del cliente
   * @returns Observable con los datos del perfil del cliente
   */
  getProfile(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${id}`);
  }
}
