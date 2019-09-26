import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { CustomerDetailsComponent } from './customer-detail/customer-details/customer-details.component';
import { CustomerDetailsListComponent } from './customer-detail/customer-details-list/customer-details-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailsService } from './shared/customer-details.service';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerDetailsListComponent,
    CustomerDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CustomerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
