import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-sigin',
  templateUrl: './signin.component.html'
})

export class SigninComponent{
  myForm: FormGroup;

  onSubmit() {
      console.log(this.myForm);
      console.log(this.myForm.pristine);  //if you get invalid values, it is because of asynch, this needs to be true
      console.log(this.myForm.value.email);  // although you get inavalid the data is already submitted
      this.myForm.reset();
  }

  ngOnInit() {
      this.myForm = new FormGroup({         
          email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          password: new FormControl(null, Validators.required)
      });
  }


}
