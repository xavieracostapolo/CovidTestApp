import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UsuarioState } from '../../store/usuario.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { Register } from '../../store/usuario.actions';
import { selectError } from '../../store/usuario.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  submitted = false;
  errorMessage$: Observable<string>;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private store: Store<UsuarioState>) {
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'register-page');
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // TODO: Use EventEmitter with form value
    this.store.dispatch(Register({ usuario: this.registerForm.value }));
  }

  ngOnInit(): void {

    this.errorMessage$ = this.store.pipe(select(selectError));

    this.registerForm = this.formBuilder.group({
      tipoDocumento: [0, [Validators.min(1), Validators.required]],
      documento: ['', Validators.required],
      nombres: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      politicas: [false, Validators.requiredTrue],
    },
      {
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'register-page');
  }
}
