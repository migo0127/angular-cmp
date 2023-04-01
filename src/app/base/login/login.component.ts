import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { log } from 'console';
import { LoginItem } from 'src/app/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: Boolean;
  captcha: string;

  constructor(
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createCaptcha();
  }

  createCaptcha(): void {
    const randomArr: number[] = [];
    for(let i = 0; i < 6; i++){
      const random: number = Math.floor(Math.random() * 10);
      randomArr.push(random);
    }
    this.captcha = randomArr.join('');
  }

  onLogin(): void {

  }

  onRegister(): void {

  }

  forgotPwd(): void {

  }

}
