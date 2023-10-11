import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  savedUser = new BehaviorSubject<any[]>([]);

  constructor() {
    if (localStorage.getItem('saved')) {

      this.savedUser.next(JSON.parse(localStorage.getItem('saved')!))
    }
  }

  saveUser(user:User){
    localStorage.setItem('user', JSON.stringify(user))
  }

  checkUser(userName:string, password:string):boolean{
    if (localStorage.getItem('user')) {
      const userString = localStorage.getItem('user')
      const user = JSON.parse(userString!);
      const isUsernameValid = userName === user.userName;
      const isPasswordValid = password === user.password;
      const isLoginValid = isUsernameValid && isPasswordValid;

      if (isLoginValid) {
        return true;
      } else {
        return false
      }

    } else {
      return false
    }

  }

  saveLogin() {
    localStorage.setItem('isLogged', JSON.stringify(true))
  }

  checkLogin(){
    if (localStorage.getItem('isLogged')) {

      const isLogged = localStorage.getItem('isLogged')

      if (isLogged === 'true') {
        return true;
      } else {
        return false
      }

    } else {
      return false;
    }
  }

}
