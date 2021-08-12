import { Component } from '@angular/core';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'control-clientes';
  faCoffee = faCoffee;
  faUser = faUser;
}
