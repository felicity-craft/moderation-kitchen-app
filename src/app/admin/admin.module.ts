import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostTableComponent } from './components/post-table/post-table.component';
import { ConfirmScheduleDialogComponent } from './components/confirm-schedule-dialog/confirm-schedule-dialog.component';




@NgModule({
  declarations: [
    LoginComponent,
    AdminHomeComponent,
    PostTableComponent,
    ConfirmScheduleDialogComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,

  ]
})
export class AdminModule { }
