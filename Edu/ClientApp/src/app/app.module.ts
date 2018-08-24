import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HumanComponent } from './models/human/human.component';
import { HumanService } from './services/human.service';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { HumanDetailsComponent } from './models/human/human-details/human-details.component';
import { HumanEditComponent } from './models/human/human-edit/human-edit.component';
import { HumanAddComponent } from './models/human/human-add/human-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    MainPageComponent,
    HumanDetailsComponent,
    HumanEditComponent,
    HumanAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HumanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
