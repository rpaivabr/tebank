import { Component } from '@angular/core';

@Component({
  selector: 'tebank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  handleClick(event: unknown) {
    console.log(event)
  }

  handleInput(event: unknown) {
    console.log(event)
  }
}
