import { CanActivate, Router } from '@angular/router';

import { Injectable, Inject } from '@angular/core';
import { tokenNotExpired, JwtHelper, AuthConfig } from 'angular2-jwt';
import { AuthService } from './auth.service';

export interface TokenInfo {
  id: string;
  user_level: number;
  sub: string;
  website: string;
}

export enum USER_LEVEL {
  SHOP_OWNER = 'OWNER', SHOP_USER = 2, SYS_ADMIN = 3, SYS_USER = 4
}

@Injectable()
export class StoreGuard implements CanActivate {
  constructor( @Inject(Router) private router: Router, @Inject(AuthService) private authService: AuthService) { }

  canActivate() {
    let helper: JwtHelper = new JwtHelper();
    let authConfig: AuthConfig = new AuthConfig();
    let token: string = <string>authConfig.getConfig().tokenGetter();
    if (token) {
      let s: TokenInfo = helper.decodeToken(token);
      if (tokenNotExpired()) {
        if (s.website === USER_LEVEL.SHOP_OWNER || s.website === USER_LEVEL.SHOP_USER) {
        return true;
        } else {
        this.router.navigate(['/admin']);
        }
      } else {
        this.router.navigate(['/auth/login']);
      }
    } else {
      this.router.navigate(['/auth/login']);
    }
    return false;
  }
}

@Injectable()
export class AdminGuard implements CanActivate {
  constructor( @Inject(Router) private router: Router, @Inject(AuthService) private authService: AuthService) { }

  canActivate() {
    let helper: JwtHelper = new JwtHelper();
    let authConfig: AuthConfig = new AuthConfig();
    let token: string = <string>authConfig.getConfig().tokenGetter();
    if (token) {
      let s: TokenInfo = helper.decodeToken(token);
      if (tokenNotExpired()) {
        if (s.user_level === USER_LEVEL.SYS_ADMIN || s.user_level === USER_LEVEL.SYS_USER) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      } else {
        this.router.navigate(['/auth/login']);
      }
    } else {
      this.router.navigate(['/auth/login']);
    }
    return false;
  }
}