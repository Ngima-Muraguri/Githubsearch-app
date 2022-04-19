import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
 public user:any=[]
 public repo:any=[]
 public username:string ='Ngima-Muraguri';

  constructor(private UserService:UserService) { 
    
    
    

  }
  findProfile(){
    this.UserService.updateProfile(this.username);
    console.log(this.username)
    this.UserService.getUser().subscribe((users:any)=>{
      console.log(users)
      this.user=users
    })
    // this.UserService.getProfileRepos().subscribe(repo=>{
    //   this.repo=repo
  }
  


  ngOnInit(): void {
    
  }

}
