import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MedicalApp-FrontEnd';
  viewMenu = true;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      //  /see also
      if (val instanceof NavigationEnd){
        if (this.router.url.includes('usuarios')){
          this.viewMenu = false;
        } else {
          this.viewMenu = true;
        }
      }
    });
  }
}
