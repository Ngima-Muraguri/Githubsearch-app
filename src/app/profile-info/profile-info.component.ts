import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
 user:any=[]
 repo:any=[]
 gitHubUser!:string

  constructor(private UserService:UserService) { 
    this.UserService.getProfileInfo().subscribe(user=>{
      this.user=user
    })
    this.UserService.getProfileRepos().subscribe(repo=>{
      this.repo=repo

    })

  }
  findProfile(){
    this.UserService.updateProfile(this.gitHubUser)
    this.UserService.getProfileInfo().subscribe((user=>{
      console.log(user)
      this.user=user
    }))
    // this.UserService.getProfileRepos().subscribe(repo=>{
    //   this.repo=repo
  }

  ngOnInit(): void {
    
  }

}
