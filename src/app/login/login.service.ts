import { Injectable } from '@angular/core';
import { Login} from './login';


@Injectable()
export class LoginService {

  constructor() {

    

   }
   name(login:any){
    console.log(login);
    
  }

}
