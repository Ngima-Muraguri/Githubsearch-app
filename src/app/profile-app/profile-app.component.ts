import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { ProfileInfo } from '../profile-info';

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
   
    this.userService.getProfileRepos().subscribe(repo=>{
      this.repo=repo
    })
  }
  

  ngOnInit(): void{
  }


  // findProfile() {
  //   this.userService.updateProfile(this.gitHubUser)
  // }

  
  }
 