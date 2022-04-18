import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private gitHubUser:string;
  private clientSecret:'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';

  constructor(private httpClient:HttpClient) { 
    this.username='Ngima-Muraguri';
  }
}
