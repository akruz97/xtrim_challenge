import { Component } from '@angular/core';
import { Profile } from '../../components/profile/profile';

@Component({
  selector: 'app-my-profile',
  imports: [Profile],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css',
})
export class MyProfile {}
