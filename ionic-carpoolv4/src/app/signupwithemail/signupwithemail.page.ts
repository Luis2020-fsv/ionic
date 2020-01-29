/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-signupwithemail',
  templateUrl: './signupwithemail.page.html',
  styleUrls: ['./signupwithemail.page.scss'],
})
export class SignupwithemailPage implements OnInit {
  public email: string;
  public password: string;
  constructor(public route: Router, public fAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      if (r) {
        console.log("Successfully registered!");
        this.route.navigate(['/tabs/home']);
      }

    } catch (err) {
      alert(err);
      console.error(err);
    }

  }
  login() {
    this.route.navigate(['loginform']);

  }
}
