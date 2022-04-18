import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile-app',
  templateUrl: './profile-app.component.html',
  styleUrls: ['./profile-app.component.css']
})
export class ProfileAppComponent implements OnInit {
  // public gitHubUser:string | undefined
  gitHubUser:string | undefined

  constructor(private userService: UserService) { 
    findProfile() {
        this.userService.updateProfile(gitHubUser)
    // public searchUser()
  }

  ngOnInit(): void {
  }

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  function findProfile() {
    throw new Error('Function not implemented.');
  }

