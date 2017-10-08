import { Component ,Input,Output,EventEmitter} from '@angular/core';
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
  @Input()message: Message;   //property bingning use if you want to pass data to other component
  @Output() editClicked=new EventEmitter<string>();  //do this if you want other component to listen to the event

  color='red';

  //I am doing video 39 after 41. It was missed
  onEdit(){
    //alert('it worked');
    this.editClicked.emit('A new value');  //emits a new event
  }

}
