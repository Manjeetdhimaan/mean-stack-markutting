import { Component } from '@angular/core';
import { fallIn } from 'src/app/shared/common/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fallIn()],
  host: { '[@fallIn]': '' }
})
export class HeaderComponent {

  isMenuOpen: boolean = false;

  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTop() {
    window.scrollTo({
      top: 0
    });
  }

}
