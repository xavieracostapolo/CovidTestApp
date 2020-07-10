import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsuarioState, usuarioStateFeatureKey, adapter } from './usuario.reducer';

export const selectUsuariosFeature = createFeatureSelector<UsuarioState>(usuarioStateFeatureKey);

export const selectUsuarios = createSelector(
    selectUsuariosFeature,
    adapter.getSelectors().selectAll
);

export const selectError = createSelector(
    selectUsuariosFeature,
    (state: UsuarioState) => state.error
);
