import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor() { }

  postRegister(register:any){

      console.log(register);
  }

}
