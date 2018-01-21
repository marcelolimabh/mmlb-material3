import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {MatTableModule} from '@angular/material';


import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
