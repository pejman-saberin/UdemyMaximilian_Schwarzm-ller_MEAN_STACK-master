import {Component,OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
  selector: 'app-message-list',
  template: `
  <div class=.col-md-8.col-md-offset-2>
    <app-message
      [message]="message"
      (editClicked)="message.content=$event"
      *ngFor="let message of messages">

    </app-message>

  </div>
  `,
    //providers:[MessageService] //dependency injection   --> we want to use one instance of the provider for both the list and the input so commented out from here
})
export class MessageListComponent implements OnInit{

  messages: Message []=[
    new Message ('Some message','max'),
    new Message ('Something esle','Pejman')
  ]

  constructor(private messageService:MessageService){}

  ngOnInit(){ ///after the component and the properties have been initilized
    this.messages=this.messageService.getMessages();
  }


}
