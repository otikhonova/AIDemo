/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

// Components
import { LecturerListComponent } from '../list/lecturer-list.component';
import { LecturerDetailsComponent } from '../details/lecturer-details.component';
import { LecturerAddComponent } from '../add/lecturer-add.component';

// Services
import { routerTransition } from '../../../services/config/config.service';

@Component({
        selector: 'app-lecturer-home',
        templateUrl: './lecturer-home.component.html',
        styleUrls: ['./lecturer-home.component.css'],
        animations: [routerTransition()],
        host: { '[@routerTransition]': '' },
        imports: [RouterModule, CommonModule]
})

export class LecturerHomeComponent implements OnInit {
        active: string;
        constructor(private router: Router, private toastr: ToastrService) {
                this.active = '';
                this.router.events.subscribe((val) => {
                        this.routeChanged(val);
                });
        }

        ngOnInit() {
        }

        routeChanged(val: any) {
                this.active = val.url;
        }

        logOut() {
                this.toastr.success('Success', "Logged Out Successfully");
                localStorage.removeItem('userData');
                this.router.navigate(['/login']);
        }
}

export const lecturerChildRoutes: Routes = [
        {
                path: '',
                component: LecturerListComponent
        },
        {
                path: 'add',
                component: LecturerAddComponent
        },
        {
                path: 'update/:id',
                component: LecturerAddComponent
        },
        {
                path: 'detail/:id',
                component: LecturerDetailsComponent
        }
];

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
