import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent} from "./messages/message-list.component";
import { MessageInputComponent} from "./messages/message-input.component";
import { MessagesComponent} from "./messages/messages.component";
import { AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {LogoutComponent} from "./auth/Logout.component";
import{SignupComponent} from  "./auth/Signup.component";
import{SigninComponent} from  "./auth/Signin.component";



@NgModule({
    declarations: [
        AppComponent, MessageComponent,MessageListComponent,MessageInputComponent,MessagesComponent,AuthenticationComponent,HeaderComponent
        ,LogoutComponent
        ,SignupComponent
        ,SigninComponent
    ],
    imports: [BrowserModule,FormsModule,FormsModule,routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
