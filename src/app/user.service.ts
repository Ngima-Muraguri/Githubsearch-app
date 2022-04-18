import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private gitHubUser:string;
  private clientSecret:'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' | undefined;

  constructor(private httpClient:HttpClient) { 
    this.gitHubUser='Ngima-Muraguri';
  }
  getProfileInfo(){
    var profile=this.httpClient.get("https://api.github.com/users/"+this.gitHubUser)
    .pipe(map((response:any)=>response));
    console.log(profile)
    return profile
  }

  getProfileRepos(){
    var profile =this.httpClient.get("https://api.github.com/users/" + this.gitHubUser +"/repos")
    .pipe(map((response:any)=>response));
    // return repos;
  }
  updateProfile(gitHubUser:string){
    this.gitHubUser=gitHubUser
  }
}
