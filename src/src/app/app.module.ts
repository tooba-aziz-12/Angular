import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { HttpClientModule } from '@angular/common/http';
import { NodataComponent } from './nodata/nodata.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FailureComponent,
    NodataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
