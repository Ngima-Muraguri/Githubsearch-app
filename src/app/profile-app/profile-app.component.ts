import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-app',
  templateUrl: './profile-app.component.html',
  styleUrls: ['./profile-app.component.css']
})
export class ProfileAppComponent implements OnInit {
  public gitHubUser:string | undefined

  constructor() { 
    // public searchUser()
  }

  ngOnInit(): void {
  }

}
