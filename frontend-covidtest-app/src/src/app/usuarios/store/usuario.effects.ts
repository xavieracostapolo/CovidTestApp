import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as fromUsuarioActions from './usuario.actions';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { LoggingService } from '../../core/logging.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UsuarioEffects {

  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.Register),
      mergeMap(action =>
        this.usuarioService.createUsuario(action.usuario).pipe(
          map(usuario => fromUsuarioActions.RegisterSuccess({ usuario })),
          catchError(error => {
            this.logger.error(error);
            return of(fromUsuarioActions.RegisterFailure({ error }));
          })
        )
      )
    )
  );

  // Esta anotacion se usa cuando no se despacha ninguna accion.
  createUsuarioSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.RegisterSuccess),
      tap((usuario) => {
        // Aca se ejecutan los procesos necesarios.
        // Ejemplo guardar el tocken.
        this.toast.success('Se ha registrado correctamente', 'Aplicacion');
        this.logger.debug('Register Success', usuario);
        this.router.navigateByUrl('/pacientes/dashboard');
      })
    ), { dispatch: false });

  createUsuarioFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuarioActions.RegisterFailure),
      tap((error) => {
        this.toast.error('Error creando el usuario.', 'Aplicacion');
        this.logger.error(error);
      })
    ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
    private router: Router,
    private logger: LoggingService,
    private toast: ToastrService,
  ) { }
}
