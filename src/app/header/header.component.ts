import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  @Output() navigateTo = new EventEmitter<string>();
  
  navigate(e) {
    this.navigateTo.emit(e);
  }
}
