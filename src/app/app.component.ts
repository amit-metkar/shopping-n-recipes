import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  screen = "recipe";
  
  onNavigate(event: string) {
    this.screen = event;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCgTc6EXp8muiYG-Atn3fA2GY1ZguPlpcY",
      authDomain: "shopping-n-recipe-app.firebaseapp.com"
    });
  }
}
