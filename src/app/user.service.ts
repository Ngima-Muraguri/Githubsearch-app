import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { ProfileInfo } from './profile-info'; 
// import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private username:string;
   private repo:any
  //  private user!:ProfileInfo

  // private clientSecret:'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' ;

  constructor(private httpClient:HttpClient) { 
    this.username='Ngima-Muraguri';
    console.log('service is ready')
  }
  getUser(){
    return this.httpClient.get("https://api.github.com/users/"+this.username)
    .pipe(map(response=>{
      return response;}));
      
    // console.log(this.httpClient.get("https://api.github.com/users/"+this.gitHubUser))
    // return profile
  }

  getProfileRepos(){
    return this.httpClient.get("https://api.github.com/users/" + this.username +"/repos")
    .pipe(map(response=>{
      return response;}));
    // return profile;
  }
  updateProfile(username:string){
    this.username=username;
  }
}

