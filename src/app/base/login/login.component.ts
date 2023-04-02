import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { DialogData, LoginItem } from 'src/app/model';
import { AuthService, LoginService,  } from 'src/app/service';
import { MaterialDialogComponent } from 'src/app/share/component/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: Boolean;
  captcha: string;

  get idControl(): AbstractControl | null { return this.loginForm.get('id') };
  get pwdControl(): AbstractControl | null { return this.loginForm.get('pwd') };
  get captchaControl(): AbstractControl | null { return this.loginForm.get('captcha') };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private authService: AuthService,
    private loginService: LoginService,
  ) {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required]],
      pwd: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCaptcha();
    this.idControl?.valueChanges.subscribe((value: string) => {
      const newValue = value.trim().replace(/[^A-z\d]+$/, '');
      this.idControl?.patchValue(newValue, {emitEvent: false})
    });
    this.pwdControl?.valueChanges.subscribe((value: string) => {
      const newValue = value.trim().replace(/\s+/, '');
      this.pwdControl?.patchValue(newValue, {emitEvent: false})
    })
  }

  getCaptcha(): void {
    const randomArr: number[] = [];
    for(let i = 0; i < 6; i++){
      const random: number = Math.floor(Math.random() * 10);
      randomArr.push(random);
    }
    this.captcha = randomArr.join('');
  }

  onSubmit(): void {
    const inputCaptcha: string = this.loginForm.get('captcha')?.value;
    if(inputCaptcha !== this.captcha){
      const dialogData: DialogData = {
        title: '驗證碼錯誤',
        errorCode: '000099',
        message: '驗證碼錯誤，請重新輸入'
      }
      this.openDialog(dialogData).afterClosed()
        .subscribe(() => {
          this.getCaptcha();
        })
      return;
    }
    this.verityLogin();
  }

  verityLogin(): void {
    this.loginService.getMockLoginData().pipe(
      switchMap((mockData: LoginItem) => {
        const mock: loginItemWithCaptcha = { ...mockData, captcha: this.captcha };
        const inputData: loginItemWithCaptcha = this.loginForm.getRawValue();
        const isSuccess: boolean = (mock.id === inputData.id && mock.pwd === inputData.pwd);
        return of(isSuccess);
      })
    ).subscribe((result: boolean) => {
        if(result){
          // 登入成功
          this.router.navigate(['/pages/home']);
          this.authService.login();
        }else{
          // '帳號或密碼有誤，請重新輸入'
          const dialogData: DialogData = {
            title: '登入失敗',
            errorCode: '000000',
            message: '帳號或密碼有誤，請重新輸入'
          }
          this.openDialog(dialogData).afterClosed()
            .subscribe(() => {
              this.clearData();
            });
        }
      });
  }

  onRegister(): void {

  }

  forgotPwd(): void {

  }

  clearData(): void {
    this.getCaptcha();
    this.loginForm.reset();
  }

  openDialog(data: DialogData): any{
    const dialogRef: any = this.dialog.open(MaterialDialogComponent, {
      data: data
    })
    return dialogRef;
  }


}

interface loginItemWithCaptcha {
  id: string;
  pwd: string;
  captcha: string;
}
