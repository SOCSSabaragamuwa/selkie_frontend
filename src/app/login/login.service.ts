import { Injectable } from '@angular/core';
import { Login} from './login';


@Injectable()
export class LoginService {

  constructor() {

    

   }

   sendData(login:any){
    console.log(login);
    
  }

}
