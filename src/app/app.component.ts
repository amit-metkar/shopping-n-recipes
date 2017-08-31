import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  screen = 'recipe';

  onNavigate(event: string) {
    this.screen = event;
  }
}
