import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../_models/Evento';

//injeção de dependencia provider
@Injectable({
    providedIn: 'root'
})
export class EventoService {
    baseURL = 'https://localhost:5001/api/Evento';

    constructor(private http: HttpClient) { }

    //observibles
    getAllEvento(): Observable<Evento[]> {
        return this.http.get<Evento[]>(this.baseURL);
      }
    
      getEventoByTema(tema: string): Observable<Evento[]> {
        return this.http.get<Evento[]>(`${this.baseURL}/getByTema/${tema}`);
      }
    
      getEventoById(id: number): Observable<Evento> {
        return this.http.get<Evento>(`${this.baseURL}/${id}`);
      }



}
