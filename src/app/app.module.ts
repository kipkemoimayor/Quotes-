import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormComponent } from './form/form.component';
import { HighestDirective } from './highest.directive';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    ButtonsComponent,
    FormComponent,
    HighestDirective,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
