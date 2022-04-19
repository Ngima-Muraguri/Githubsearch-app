import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileInfo } from './profile-info'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {
   gitHubUser!:string;
   repo:any
   user!:ProfileInfo

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

  getProfileRepos():Observable<any>{
    var profile =this.httpClient.get("https://api.github.com/users/" + this.gitHubUser +"/repos")
    .pipe(map((response:any)=>response));
    return profile;
  }
  updateProfile(gitHubUser:string){
    this.gitHubUser=gitHubUser
  }
}
