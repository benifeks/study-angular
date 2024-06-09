import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cards } from 'src/app/models/black-jack-models/black-jackModels';
import { Observable } from 'rxjs';

@Injectable()
export class BjService {
  public constructor(private http: HttpClient) {}

  public getCards(url: string): Observable<Cards> {
    return this.http.get<Cards>(url);
  }
}
