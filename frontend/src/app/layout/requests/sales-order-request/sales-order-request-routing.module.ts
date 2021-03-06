import { SalesOrderRequestComponent } from './sales-order-request.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', component: SalesOrderRequestComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesOrderRequestRoutingModule { }
