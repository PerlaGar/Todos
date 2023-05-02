import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httClient: HttpClient, private authService: AuthService) {}

  get(url: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorazion' : this.authService.getToken()
    });
    return this.httClient.get(url, {headers});
  }
}
