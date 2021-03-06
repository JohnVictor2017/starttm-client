
import { AuthGuard } from './../_guards/auth.guard';

import { Http, RequestOptions } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JwtModule } from "@auth0/angular-jwt";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

import { StartHttp } from "./start-http";
import { SegurancaRoutingModule } from "./seguranca-routing.module";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { environment } from "../../environments/environment";

export function tokenGetter() {
  return localStorage.getItem("token");
}

const components = [
  LoginFormComponent,
  RegisterFormComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SegurancaRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    InputTextModule,
    ButtonModule,
  ],
  declarations: [
    components
  ],
  providers: [AuthGuard]
})
export class SegurancaModule { }
