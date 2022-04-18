import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
