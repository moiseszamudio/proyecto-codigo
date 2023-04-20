import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private url = environment?.urlRickMortyApi;

  constructor(private http: HttpClient) { }

  public getlistPersonajes(name:string): Observable<any>{
    return this.http.get(this.url.concat(`/?name=${name}`) ) as Observable<any>;
  }
  
  public getPersonajeById(id:any){
    return this.http.get(this.url.concat(`/${id}`) ) as Observable<any>;
  }
}
