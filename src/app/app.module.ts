import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './components/shell/header-menu/header-menu.component';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShellLayoutComponent } from './components/shell/shell-layout.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    ShellLayoutComponent,
    ShellComponent,
    HeaderMenuComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [AuthGuard],
        component: ShellLayoutComponent,
        children: [
          {
            path: '',
            canActivate: [AuthGuard],
            component: ShellComponent,
            loadChildren: './components/shell/shell.module#ShellModule'
          }
        ]
      },
      { path: 'authentication', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'signup', component: SignupComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
