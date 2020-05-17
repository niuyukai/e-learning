import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private logon : FormGroup;

  constructor(private formBuilder: FormBuilder, 
              public alertController: AlertController,
              public router: Router) {
    this.logon = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async login() {
    if (this.logon.value.name != 'france@demo.com') {
      const alert = await this.alertController.create({
       // header: 'Alert',
       // subHeader: 'Subtitle',
        message: '用户不存在',
        buttons: ['OK']
      });
  
      await alert.present();
      this.router.navigateByUrl('login');
      return false;
    }

    if (this.logon.value.password != 'password') {
      const alert = await this.alertController.create({
       // header: 'Alert',
       // subHeader: 'Subtitle',
        message: '登录密码不一致',
        buttons: ['OK']
      });
  
      await alert.present();
      this.router.navigateByUrl('login');
      return false;
    }
  }

  ngOnInit() {
  }
}
