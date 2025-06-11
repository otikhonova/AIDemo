/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
 import { CommonModule } from '@angular/common';

 // Services
 import { LecturerService } from '../../../services/lecturer/lecturer.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
        selector: 'app-lecturer-details',
        templateUrl: './lecturer-details.component.html',
        styleUrls: ['./lecturer-details.component.css'],
        animations: [routerTransition()],
        host: {'[@routerTransition]': ''},
        standalone: true,
        imports: [CommonModule, RouterModule]
 })

 export class LecturerDetailsComponent implements OnInit {
        index:any;
        lecturerDetail:any;
        constructor(private router: Router, private route: ActivatedRoute, private lecturerService:LecturerService,private toastr: ToastrService) {
                this.route.params.subscribe(params => {
                        this.index = params['id'];
                        if (this.index && this.index != null && this.index != undefined) {
                                this.getLecturerDetails(this.index);
                        }
                });
        }

        ngOnInit() {
        }

        getLecturerDetails(index:number){
                let getLecturerDetail = this.lecturerService.getLecturerDetails(index);
                if(getLecturerDetail) {
                        this.lecturerDetail = getLecturerDetail.lecturerData;
                        this.toastr.success(getLecturerDetail.message,"Success");
                }
        }

 }

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
