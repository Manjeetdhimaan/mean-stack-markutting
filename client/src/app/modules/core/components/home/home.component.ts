import { Component } from '@angular/core';
import { fallIn } from 'src/app/shared/common/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fallIn()],
  host: { '[@fallIn]': '' }
})
export class HomeComponent {

}
