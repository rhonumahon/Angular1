import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SampleComponent } from './components/sample/sample.component';
import { HereComponent } from './components/here/here.component';
import { OverhereComponent } from './components/overhere/overhere.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SampleComponent,
    HereComponent,
    OverhereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
