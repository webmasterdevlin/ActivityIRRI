import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './components/shell/header-menu/header-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShellLayoutComponent } from './components/shell/shell-layout.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ShellLayoutComponent,
    ShellComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ShellLayoutComponent,
        children: [
          {
            path: '',
            component: ShellComponent,
            loadChildren: './components/shell/shell.module#ShellModule'
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
