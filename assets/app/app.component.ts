import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    
})
export class AppComponent {
    content='pejman';
    message={
      content: 'A message',
      author: 'Pejman',
    };
}
