import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  constructor(private http: HttpClient) { }
  listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${environment.url_gateway}/partidos`);
  }
  eliminar(id: string) {
    return this.http.delete<Partido>(`${environment.url_gateway}/partidos /${id}`,);
  }
  getpartido(id: string): Observable<Partido> {
    return this.http.get<Partido>(`${environment.url_gateway}/partidos/${id}`);
  }
  crear(elpartido: Partido) {
    return this.http.post(`${environment.url_gateway}/partidos`,elpartido);
  }
  editar(id: string, elpartido: Partido) {
    return this.http.put(`${environment.url_gateway}/partidos/${id}`,elpartido);
  }
}
