/**
 * AuthService
 *
 * Servicio para gestionar operaciones de autenticación.
 * Incluye métodos para iniciar sesión, cerrar sesión y verificar el estado de autenticación.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/user/check';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient, private router: Router) {}

  checkUser(clientCode: string): Observable<any> {
    return this.http.post(this.apiUrl, { identification: clientCode });
  }

  login(userId: number) {
    localStorage.setItem(this.TOKEN_KEY, userId.toString());
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token; // true si existe
  }

  getUserId(): number | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token ? Number(token) : null;
  }
}
