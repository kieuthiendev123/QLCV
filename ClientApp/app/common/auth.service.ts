import 'rxjs/Rx';

// GLOBAL IMPORT
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';;
import { Http, Headers, Response, RequestOptions } from '@angular/http';

Injectable();
export class AuthService {
    private storeCode: string;

    // for change the navbar state between online and offline
    private authenticate = new Subject<boolean>();
    authenticateState$ = this.authenticate.asObservable();

    constructor( @Inject(Http) private http: Http, @Inject(Router) private router: Router) {
        let hostUrl = window.location.host;
        hostUrl = hostUrl.replace(/^www\./, '').toLowerCase();
        console.log(hostUrl);
        if (hostUrl === 'pko-web.azurewebsites.net') {
            // tạm thời fix để test azure
            this.storeCode = 'demo100';
        } else {
            this.storeCode = hostUrl.split('.')[0];
        }
    }

    signup(userName: string,fullName:string,company:string,email:string,phoneNumber:string, password: string,address:string): Observable<any> {
        return this.http.post('/api/account/register', {
          userName: userName,
          company:company,
          fullName:fullName,
          companyname: company,
          password: password,
          provider:"self",
          email : email,
          phoneNumber:phoneNumber,
          address:address,
          permissionid:1,
          comment:null,  
        })
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    signin(username: string, password: string): Observable<any> {
        return this.http.post('/api/account/signin', {
            company: this.storeCode,
            username: username,
            password: password
        })
            .map(res => res.json())
            .catch(error => {
                return Observable.throw(error.json());
            });
    }

    // delete the token in localStorage and change the navbar state
    logout(): void {
        localStorage.removeItem('token');
        this.authenticate.next(false);
        this.router.navigate(['/']);
    }

    // save the token in localStorage and change the navbar state
    saveToken(token: string): void {
        localStorage.setItem('token', token);
        this.authenticate.next(true);
    }

    // return if the user is authenticate
    isAuthenticate(): boolean {
        let isAuth: boolean;
        if (localStorage.getItem('token')) {
            isAuth = true;
        } else {
            isAuth = false;
        }
        this.authenticate.next(isAuth);
        return isAuth;
    }

}
