import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModule } from './../form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesOrderRoutingModule } from './salesorder-routing.moduls';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesorderComponent } from './salesorder.component';

@NgModule({
  declarations: [SalesorderComponent],
  imports: [
    CommonModule , SalesOrderRoutingModule,ReactiveFormsModule,FormModule ,NgbModule
  ]
})
export class SalesorderModule { }