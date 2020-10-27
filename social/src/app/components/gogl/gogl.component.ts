import { Component, OnInit } from '@angular/core';
import {gClientId} from '../../secrets'

@Component({
  selector: 'app-gogl',
  templateUrl: './gogl.component.html',
  styleUrls: ['./gogl.component.css']
})
export class GoglComponent implements OnInit {

  constructor() { }
  public gClientId = gClientId;
  

  ngOnInit(): void {
  };

  onSignIn(googleUser) {
    console.log('sin clikd')
    var profile = googleUser.getBasicProfile();
    // console
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  

}
