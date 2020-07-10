import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder
    ) {
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({});
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'login-page');
  }

}
