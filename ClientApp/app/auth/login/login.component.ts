import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';
import { LoginForm } from './login.form';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Component({

    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: LoginForm = new LoginForm();
    // Toast Option
  public toastOptions: ToastOptions = {
    title: '',
    msg: '',
    showClose: true,
    timeout: 5000,
    theme: 'material',

};

    constructor(private router: Router, private authService: AuthService,private toastyService: ToastyService, private toastyConfig: ToastyConfig) { }

    checkFullPageBackgroundImage() {
        const $page = $('.full-page');
        const imageSrc = $page.data('image');

        if (imageSrc !== undefined) {
            const imageContainer = '<div class="full-page-background" style="background-image: url(' + imageSrc + ') "/>';
            $page.append(imageContainer);
        }
    }

    ngOnInit() {
        this.checkFullPageBackgroundImage();

        setTimeout(function () {
            // after 500 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 500);
    }

    onSubmit() {
        this.authService.signin(this.model.username, this.model.password)
            .subscribe(res => {
                this.authService.saveToken(res.token);
                this.toastOptions.msg = 'Đăng nhập thành công!';
                this.toastyService.success(this.toastOptions);
                this.router.navigate(['/store/dashboard']);
            }, error => {
                this.toastOptions.msg = 'Đăng nhập Thất Bại!';
                this.toastyService.error(this.toastOptions);
                console.log(error);
            })
    }
}
