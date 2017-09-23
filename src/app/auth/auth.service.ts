import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => { console.log(error); }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      (resolve) => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.token = token;
          }
        );
      },
      (reject) => { console.log(reject); }
    )
    .catch(
      (error) => { console.log(error); }
    );
  }

  signoutUser() {
    firebase.auth().signOut().then(
      (resolve) => { console.log(resolve); },
      (reject) => { console.log(reject); }
    );
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    if (this.isAuthenticated()) {
      firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => { this.token = token; }
      );
      return this.token;
    } else {
      this.router.navigate(['auth/signin']);
      return null;
    }
  }

  isAuthenticated() {
    return this.token != null;
  }
}
