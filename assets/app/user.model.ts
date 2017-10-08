export class User{
  // if public used you don't need to decalre like you did in message and also question mark makes them optional
  constructor(public email:string, public password:string , public firstname?:string, public lastName?:string){}
}
