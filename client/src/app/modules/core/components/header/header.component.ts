import { Component } from '@angular/core';
import { fallIn } from 'src/app/shared/common/animations';
import { UserApiService } from 'src/app/shared/services/user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [fallIn()],
  host: { '[@fallIn]': '' }
})
export class HeaderComponent {

  isMenuOpen: boolean = false;

  constructor( private userApiService: UserApiService ){}

  toggleMenu () {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isLoggedIn() {
    return this.userApiService.isLoggedIn();
  }

  scrollTop() {
    window.scrollTo({
      top: 0
    });
  }
}
