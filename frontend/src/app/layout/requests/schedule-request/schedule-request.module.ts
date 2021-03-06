import { ConfirmationDialogComponent } from './../../../confirmation-dialog/confirmation-dialog.component';
import { ScheduleRequestRoutingModule } from './schedule-request-routing.module';
import { ScheduleRequestComponent } from './schedule-request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';

@NgModule({
  declarations: [ScheduleRequestComponent ,ConfirmationDialogComponent],
  imports: [
    CommonModule , ReactiveFormsModule , ScheduleRequestRoutingModule,NgbModule, NgxPaginationModule
  ],
  providers: [ ConfirmationDialogService ],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class ScheduleRequestModule { }
