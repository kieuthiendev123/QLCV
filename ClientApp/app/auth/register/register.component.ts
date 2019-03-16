import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../common/auth.service";
import { RegisterForm } from "./register.form";
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

declare var $: any;

@Component({
  selector: "register-cmp",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  test: Date = new Date();
  model: RegisterForm = new RegisterForm();
  // Toast Option
  public toastOptions: ToastOptions = {
    title: '',
    msg: '',
    showClose: true,
    timeout: 5000,
    theme: 'material',

};

  constructor(private router: Router, private authService: AuthService,private toastyService: ToastyService, private toastyConfig: ToastyConfig) {}

  public list_status: Array<any> = [];
  public list_otherlist: Array<any> = [];



  checkFullPageBackgroundImage() {
    var $page = $(".full-page");
    var image_src = $page.data("image");

    if (image_src !== undefined) {
      var image_container =
        '<div class="full-page-background" style="background-image: url(' +
        image_src +
        ') "/>';
      $page.append(image_container);
    }
  }
  ngOnInit() {
    this.checkFullPageBackgroundImage();
    this.list_status = [
      {id:1,name:"Đang Làm Việc"},
      {id:0,name:"Đã Nghỉ Việc"}
    ];
    this.list_otherlist = [
      {id:1,name:"Tổng Giám Đốc"},
      {id:2,name:"Giám Đốc"},
      {id:3,name:"Trưởng Phòng"}
    ]
  }
  onRegister() {
      // console.log(this.model);
    this.authService
      .signup(
        this.model.userName,
        this.model.fullName,
        this.model.company,
        this.model.email,
        this.model.phoneNumber,
        this.model.password,
        this.model.address
      )
      .subscribe(
        res => {
          this.authService.saveToken(res.token);
          this.toastOptions.msg = 'Đăng ký thành công!';
          // console.log(this.toastOptions);
          this.toastyService.success(this.toastOptions);
          this.router.navigate(["/auth/login"]);
        },
        error => {

          this.toastOptions.msg = 'Đăng ký thất bại!';
          // console.log(this.toastOptions);
          this.toastyService.error(this.toastOptions);
          
          console.log(error);
        }
      );
  }
}
