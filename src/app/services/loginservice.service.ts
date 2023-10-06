import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map } from 'rxjs';
import { enviroment } from '../../enviroments/environments';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    const url = `${enviroment.baseUrlBackend}/login`
    return this.httpClient.post(url, { username, password }, { responseType: 'json' }).pipe(
      map((data) => this.setTokenLocalStorage(data)),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw 'login fail'
      })
    )

  }

  public getToken():string | null{
    return localStorage.getItem(enviroment.token)
  }

  private setTokenLocalStorage(response: any) {
    const { type, token, _ } = response;
    localStorage.setItem(enviroment.token, token)
  }


  private removerTokenLocalStorage():void{
    localStorage.removeItem(enviroment.token)
  }
}
