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

  constructor() { 
    // public searchUser()
  }

  ngOnInit(): void {
  }

}
// constructor(private userService: UserService){}
// findProfile(){
//   this.userService.updateProfile(gitHubUser)
// }