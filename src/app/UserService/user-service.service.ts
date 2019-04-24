import { Injectable } from '@angular/core';

// import { HttpClient } from 'selenium-webdriver/http';
import{HttpClient}from '@angular/common/http'
import {  User } from '../model/user-model';
import { Message } from '../model/user-model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl1 = "http://localhost:3000/"

  constructor(private http:HttpClient) { }





 
  


  regdataAdd(user:User){
    return this.http.post(this.baseUrl1+"User",user)

  }
  getUser(){
    return this.http.get<User[]>(this.baseUrl1+"User")

  }
  

  storeMsg(msg:Message){
    return this.http.post(this.baseUrl1+"Messages",msg)

  }
  
  retriveMsg(){
    return this.http.get<Message[]>(this.baseUrl1+"Messages")

  }
}
