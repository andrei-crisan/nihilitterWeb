import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public autentificationService: AuthentificationService){}

  logout() {
    if(confirm("Are you sure?")){
      localStorage.removeItem('nietszche');
      location.reload();
    }
  }
}
