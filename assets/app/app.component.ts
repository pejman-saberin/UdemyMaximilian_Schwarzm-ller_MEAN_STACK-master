import { Component } from '@angular/core';
import {Message} from "./messages/message.model"
import {MessageService} from "./messages/message.service"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]   /*if we want to use one instance of something, we  add it here. Once it is injetxed here, all the child components will inherit this, input and list are the
    child of app as mentioned in the app html
    <app-message-input></app-message-input>
    <app-message-list></app-message-list>
                                  */

})
export class AppComponent {
    //message: Message= new Message ('Some message','max');

    messages: Message []=[
      new Message ('Some message','max'),
      new Message ('Something esle','Pejman')
    ]


}
