import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/usuario';

export const Register = createAction(
  '[Register Page] Register',
  props<{ usuario: Usuario }>()
);

export const RegisterSuccess = createAction(
  '[Register Page] Register Success',
  props<{ usuario: Usuario }>()
);

export const RegisterFailure = createAction(
  '[Register Page] Register Failure',
  props<{ error: any }>()
);

export const loadUsuarios = createAction(
  '[Usuario] Load Usuarios'
);

export const loadUsuariosSuccess = createAction(
  '[Usuario] Load Usuarios Success',
  props<{ data: any }>()
);

export const loadUsuariosFailure = createAction(
  '[Usuario] Load Usuarios Failure',
  props<{ error: any }>()
);
