import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
    declarations: [CustomersComponent,
        CustomersListComponent,
        FilterTextboxComponent,

    ],
    imports: [
        CommonModule, // for ngIf, ngFor, ngClass and so on
        SharedModule, // for pipe
        FormsModule, // for [(ngModel)]
        CustomersRoutingModule
    ],
    exports: [CustomersComponent]
})
export class CustomersModule { }
