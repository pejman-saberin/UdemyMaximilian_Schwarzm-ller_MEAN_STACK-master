import {Routes} from "@angular/router";

import {LogoutComponent} from "./Logout.component";
import{SignupComponent} from  "./Signup.component";
import{SigninComponent} from  "./Signin.component";

//for child routes you don't use forRoot
export const AUTH_ROUTES: Routes=[
  {path:'', redirectTo:'signup', pathMatch: 'full'},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'logout', component:LogoutComponent},
];
