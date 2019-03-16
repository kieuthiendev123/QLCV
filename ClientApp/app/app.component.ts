import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './common/auth.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['../sass/material-dashboard.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    isLogged: boolean; // if user is logged or not

    constructor(private router: Router, private authService: AuthService, private translate: TranslateService) {
        this.authService.authenticateState$.subscribe(
            state => this.isLogged = state
        );

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('vi');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('vi');
    }
    // logout user and redirect to home page
    logout() {
        this.authService.logout();
    }
    ngOnInit() {
        this.isLogged = this.authService.isAuthenticate();

        const body = document.getElementsByTagName('body')[0];
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add('perfect-scrollbar-on');
        } else {
            body.classList.add('perfect-scrollbar-off');
        }
        $.material.init();
    }
}
