import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.signupForm.form.value.email;
    const password = this.signupForm.form.value.password;
    this.authService.signupUser(email, password);
  }

}
