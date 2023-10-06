import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { enviroment } from 'src/enviroments/environments';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = `${enviroment.baseUrlBackend}/clients`;

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Client[]> {
    return this.http.get(this.apiUrl).pipe(map(this.mapClients));
  }

  public mapClients(data: any): Array<Client> {
    const listClient: Client[] = [];
  }
}
