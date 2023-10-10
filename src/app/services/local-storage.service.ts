import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  savePassword(password:string){
    console.log('TATSUMAKI SENPUKYAKU');
    localStorage.setItem('savedCredentials', JSON.stringify(password));
  }

}
