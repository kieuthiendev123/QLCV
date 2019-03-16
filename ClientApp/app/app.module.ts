import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, XHRBackend, HttpModule } from '@angular/http';

import { APP_BASE_HREF } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { StoreGuard, AdminGuard } from './common/auth.guard';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AuthService } from './common/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from './shared/footer/footer.module';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from './shared/navbar/navbar.module';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SidebarModule } from './sidebar/sidebar.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InterceptedHttp } from './common/http.interceptor';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DragulaModule } from 'ng2-dragula';
import { BsModalModule } from 'ng2-bs3-modal';
import { ToastyModule } from 'ng2-toasty';

// import { AppComponent }  from './app.component';
import { TreeModule, SharedModule } from 'primeng/primeng';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new InterceptedHttp(http, options);
}

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        DragulaModule,
        NgxDatatableModule,
        BsModalModule,
        ToastyModule.forRoot(),
        TreeModule, 
        SharedModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
    ],
    providers: [
        StoreGuard, AdminGuard, AuthService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, Router, RequestOptions]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
