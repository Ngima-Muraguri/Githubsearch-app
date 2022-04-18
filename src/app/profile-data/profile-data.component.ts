import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  repos:any[];
  repository:{
    name:string,
    full_name:string,
    description:string,
    // language:string,
    // homepage:string,
    // html_url:string


  }

  constructor(private userService:UserService) { 
    this.userService.getProfileRepos().subscribe((repos)=>{
      this.repos=repos;
    })
  }

  ngOnInit(): void {
  }

}
