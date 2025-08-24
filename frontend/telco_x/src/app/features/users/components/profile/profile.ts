import { Component } from '@angular/core';
import { UserProfile } from '../../../../shared/interfaces';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { CommonModule } from '@angular/common';
import { UserShared } from '../../../../shared/services/user.shared';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone: true,
})
export class Profile {
  profile: UserProfile | undefined;

  constructor(
    private profileService: ProfileService,
    private userShared: UserShared,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const userId = this.auth.getUserId();

    console.log('ID recibido en dashboard:', userId);
    if (!userId) {
      return;
    }

    this.profileService.getProfile(userId).subscribe({
      next: (data) => {
        this.profile = data;
        console.log('Perfil recibido:', data);
      },
      error: (err) => {
        console.error('Error al cargar perfil:', err);
      },
    });
  }
}
