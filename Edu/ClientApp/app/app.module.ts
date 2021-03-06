import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HumanComponent } from './models/human/human.component';
import { HumanService } from './services/human/human.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { HumanDetailsComponent } from './models/human/human-details/human-details.component';
import { HumanEditComponent } from './models/human/human-edit/human-edit.component';
import { HumanAddComponent } from './models/human/human-add/human-add.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { AuthInterceptor } from './services/auth/interceptor/auth.interceptor';
import { AuthService } from './services/auth/auth.service';
import { AuthRouteGuard } from './guards/routing/auth-route.guard';

@NgModule({
    declarations: [
        AppComponent,
        HumanComponent,
        MainPageComponent,
        HumanDetailsComponent,
        HumanEditComponent,
        HumanAddComponent,
        LoginPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        HumanService,
        AuthService,
        AuthRouteGuard,
        {
            provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
