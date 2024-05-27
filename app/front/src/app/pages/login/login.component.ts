import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'booky-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    RippleModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  router = inject(Router)

  form: FormGroup = new FormGroup({});
  isLoading = false
  ngOnInit(): void {
    const localEmail = localStorage.getItem('');

    this.form = new FormGroup({
      email: new FormControl(localEmail ? localEmail : '', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      remember_me: new FormControl(localEmail ? true: false)
    });
  }
  async login(){
    this.isLoading = true

    //TODO: validate login
    this.router.navigate(['/'])

  }
}
