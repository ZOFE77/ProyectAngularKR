import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-modulos';

  constructor(private router: Router) {}

  navegarA() {
    this.router.navigate(['/modulo-a/componente-a']);
  }

  navegarB() {
    this.router.navigate(['/modulo-b/componente-b']);
  }
}
