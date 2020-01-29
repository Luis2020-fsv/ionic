/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.page.html',
  styleUrls: ['./loginform.page.scss'],
})
export class LoginformPage implements OnInit {
  public email: string;
  public password: string;
  constructor(public route: Router, public menuCtrl: MenuController, public fAuth: AngularFireAuth) { }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
  ngOnInit() {
    console.log(this.email, this.password);
    
  }

  async goforHome() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.email,
        this.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.route.navigate(['/tabs/home']);
      }

    } catch (err) {
      alert('error!Invalid login data');
      // console.error(err);
    }
    
  }
  goforForgotPassword() {
    this.route.navigate(['forgotpassword']);

  }
  goforSignupPage() {
    this.route.navigate(['signup']);
  }
}
