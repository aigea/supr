import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-super-app';

  evaluatedExpressions = [];

  displayData(value) {
    alert(JSON.stringify(value));
  }

}

