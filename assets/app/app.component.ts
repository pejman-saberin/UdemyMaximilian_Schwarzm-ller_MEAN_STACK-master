import { Component } from '@angular/core';
import {Message} from "./messages/message.model"

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

})
export class AppComponent {
    //message: Message= new Message ('Some message','max');

    messages: Message []=[
      new Message ('Some message','max'),
      new Message ('Something esle','Pejman')
    ]


}
