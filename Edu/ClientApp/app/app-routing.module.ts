import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HumanComponent } from './models/human/human.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { HumanDetailsComponent } from './models/human/human-details/human-details.component';
import { HumanEditComponent } from './models/human/human-edit/human-edit.component';
import { HumanAddComponent } from './models/human/human-add/human-add.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { AuthRouteGuard } from './guards/routing/auth-route.guard';

const routes: Routes = [
    {
        path: "", canActivate: [AuthRouteGuard], children: [
            { path: "", component: MainPageComponent },
            { path: "humans", component: HumanComponent },
            { path: "humans/details/:id", component: HumanDetailsComponent },
            { path: "humans/edit/:id", component: HumanEditComponent },
            { path: "humans/add", component: HumanAddComponent }
        ]
    },
    { path: "login", component: LoginPageComponent },
    { path: "**", redirectTo: "/", pathMatch: "full" }
];
const routerModuleWithProviders: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
@NgModule({
    imports: [routerModuleWithProviders],
    exports: [RouterModule]
})
export class AppRoutingModule { }
