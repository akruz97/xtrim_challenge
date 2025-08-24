import { Component } from '@angular/core';
import { UserProfile } from '../../../../shared/interfaces';
import { ProfileService } from '../../../../core/services/profile/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  standalone: true,
})
export class Profile {
  profile: UserProfile | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // llamamos al servicio
    this.profileService.getProfile(2).subscribe({
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
