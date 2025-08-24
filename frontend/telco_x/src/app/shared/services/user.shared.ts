import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserShared {
  // BehaviorSubject permite almacenar un valor y que otros componentes se suscriban
  private userIdSource = new BehaviorSubject<number | null>(null);
  userId$ = this.userIdSource.asObservable();

  // Método para actualizar el ID
  setUserId(id: number) {
    this.userIdSource.next(id);
  }

  // Método para obtener el valor actual sin suscribirse
  getUserId(): number | null {
    return this.userIdSource.getValue();
  }
}
