import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Andrei';
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onButtonClick(item) {
    this.rootItems.push(item);
    console.log(this.rootItems);
  }
}
