import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile-app',
  templateUrl: './profile-app.component.html',
  styleUrls: ['./profile-app.component.css']
})
export class ProfileAppComponent implements OnInit {
  // public gitHubUser:string | undefined
  gitHubUser!:string
  user:any=[]
  repo:any=[]
  

  constructor(private userService: UserService) { 
    this.userService.getProfileInfo().subscribe(user=>{
      this.user=user
    })
    this.userService.getProfileRepos().subscribe(repo=>{
      this.repo=repo
    })
  }
  findProfile(){
    this.userService.updateProfile(this.gitHubUser)
    this.userService.getProfileInfo().subscribe((user=>{
      console.log(user)
      this.user=user
    }))
  }

  ngOnInit(): void{
  }


  // findProfile() {
  //   this.userService.updateProfile(this.gitHubUser)
  // }

  
  }
 