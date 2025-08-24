import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserShared } from '../../../../shared/services/user.shared';
import { of, throwError } from 'rxjs';
import Swal, { SweetAlertResult } from 'sweetalert2';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let authServiceMock: any;
  let routerMock: any;
  let userServiceMock: any;

  beforeEach(async () => {
    authServiceMock = { checkUser: jasmine.createSpy('checkUser') };
    routerMock = { navigate: jasmine.createSpy('navigate') };
    userServiceMock = { setUserId: jasmine.createSpy('setUserId') };

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: UserShared, useValue: userServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar alerta si clientCode está vacío', () => {
    spyOn(Swal, 'fire');
    component.clientCode = '';
    component.buscarUsuario();
    expect(Swal.fire).toHaveBeenCalledWith(
      jasmine.objectContaining({
        icon: 'warning',
        title: 'Atención',
        text: 'Ingresa un código de usuario',
      })
    );
  });

  it('debería manejar error si usuario no existe', () => {
    authServiceMock.checkUser.and.returnValue(
      throwError({ error: { error: 'Usuario no encontrado' } })
    );
    spyOn(Swal, 'fire');

    component.clientCode = '999';
    component.buscarUsuario();

    expect(Swal.fire).toHaveBeenCalledWith(
      jasmine.objectContaining({
        icon: 'error',
        title: 'Error',
        text: 'Usuario no encontrado',
      })
    );
  });
});
