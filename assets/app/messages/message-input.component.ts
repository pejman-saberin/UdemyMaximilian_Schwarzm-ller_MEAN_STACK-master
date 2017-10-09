import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {MessageService} from "./message.service";
import {Message} from "./message.model"


@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  //providers:[MessageService] //dependency injection  --> we want to use one instance of the provider for both the list and the input so commented out from here

})

export class MessageInputComponent{
  constructor(private messsageService:MessageService){}
  onSubmit(form:NgForm){
    //console.log(form);
    const message=new Message(form.value.content,'Max');  //it takesthe value into content  field
    this.messsageService.addMessage(message);
    form.resetForm();
    //console.log(value);

  }

}
