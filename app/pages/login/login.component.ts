import { Component, OnInit } from '@angular/core'
import { exit } from 'nativescript-exit'
import {  } from '../../images/'

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  constructor(){}
  
  ngOnInit(): void {

  }

  public fecharApp() {
    exit()
  }
}