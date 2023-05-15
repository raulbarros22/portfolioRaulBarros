import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  URL = 'http://localhost:8080/personas';

  constructor(private http:HttpClient) { }

  public getPersonas(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
  obtenerDatos():Observable<any> {
    /* console.log('El servicio portfolio está corriendo...'); */
    return this.http.get('./assets/data/data.json');
  }
}
