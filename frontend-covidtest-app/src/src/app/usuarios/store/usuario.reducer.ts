import {
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Usuario } from '../models/usuario';
import { RegisterSuccess, RegisterFailure } from './usuario.actions';

export const usuarioStateFeatureKey = 'usuarioState';

export interface UsuarioState extends EntityState<Usuario> {
  error: any;
}

export const adapter: EntityAdapter<Usuario> = createEntityAdapter<Usuario>();

export const initialState: UsuarioState = adapter.getInitialState({
  error: null
});

const usuarioReducers = createReducer(
  initialState,
  on(RegisterSuccess, (state, { usuario }) =>
    (adapter.addOne(usuario, { ...state }))
  ),
  on(RegisterFailure, (state) =>
    ({ ...state, error: 'Error de registro' })
  )
);

export function reducers(state: UsuarioState | undefined, action: Action){
  return usuarioReducers(state, action);
}

export const metaReducers: MetaReducer<UsuarioState>[] = !environment.production ? [] : [];
