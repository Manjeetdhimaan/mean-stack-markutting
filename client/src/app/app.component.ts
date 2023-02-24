import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buy Views, Likes, Subscribers';

  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}
