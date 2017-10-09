import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model"


@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  providers:[MessageService] //dependency injection

})

export class MessageInputComponent{
  constructor(private messsageService:MessageService){}
  onSave(value:string){
    const message=new Message(value,'Max');
    this.messsageService.addMessage(message);
    //console.log(value);

  }

}
