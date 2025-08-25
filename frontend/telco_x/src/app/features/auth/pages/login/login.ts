import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { UserShared } from '../../../../shared/services/user.shared';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

/**
 * Login
 * Muestra la página de ingreso al dashboard
 */
export class Login {
  clientCode: string = '';
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userShared: UserShared
  ) {}

  doLogin(userId: number): void {
    this.authService.login(userId);
  }

  /*
   * Consulta el código de cliente ingresado.
   */
  checkUser(): void {
    if (!this.clientCode.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'Ingresa un código de usuario',
      });

      return;
    }
    this.authService.checkUser(this.clientCode).subscribe({
      next: (data) => {
        this.user = data;
        console.log('Usuario recibido:', data);
        this.userShared.setUserId(data.id);
        this.doLogin(data.id);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error.message || 'Usuario no encontrado',
        });
      },
    });
  }
}
