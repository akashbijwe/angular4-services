import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }
  user: any = {
    "name": "Akash Bijwe",
    "email": "mr.akashbijwe@gmail.com"
  };

  updateUserData(data){
    this.user = data;
    console.log("data", data);
  }
}
