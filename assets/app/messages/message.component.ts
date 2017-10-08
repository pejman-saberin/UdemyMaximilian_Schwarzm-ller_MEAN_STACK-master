import { Component ,Input} from '@angular/core';
import {Message} from "./message.model"


@Component({
  selector: 'app-message',   //now you can use <app-message> in your code
  templateUrl:  './message.component.html',
  styles: [
    `
    .author {
      display: inline-block;
      font-style: italic;
      font-size:12px;
      width:80%;
    }

    .config {
      display: inline-block;
      text-algn: right;
      font-size:12px;
      width:19%;
    }


    `
  ]
})


export class MessageComponent{
  @Input()message: Message;   //property bingning

}
