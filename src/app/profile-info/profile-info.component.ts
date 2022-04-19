import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  username:string;
  profile:{
    name:string,
    Followers:number,
    login:string,
    company:string,
    avatar_url:string,
    bio:string,
    Public repos:number,
    html_url:string,
    public_gists:number,
    folowing:number,
    created at:string,
    updated at:string
  }

  constructor(private UserService:UserService) { 

  }
  findProfile(){
    this.UserService.updateProfile(this.username)
    this.UserService.getProfileInfo().subscribe((profile=>{
      console.log(profile)
      this.profile=profile
    }))
  }

  ngOnInit(): void {
  }

}
