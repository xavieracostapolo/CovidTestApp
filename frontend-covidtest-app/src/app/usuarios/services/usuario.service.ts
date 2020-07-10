import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/usuarios/';

  createUsuario(model: Usuario) {
    return this.http.post<Usuario>(this.baseUrl, model);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  getUsuario(usuarioId: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + usuarioId);
  }

  editUsuario(model: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseUrl + model.id, model);
  }

  deleteUsuario(usuarioId: number){
    return this.http.delete(this.baseUrl + usuarioId);
  }
}
