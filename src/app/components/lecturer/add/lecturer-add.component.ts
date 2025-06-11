/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// Services
import { ValidationService } from '../../../services/config/config.service';
import { LecturerService } from '../../../services/lecturer/lecturer.service';
import { routerTransition } from '../../../services/config/config.service';

import { ToastrService } from 'ngx-toastr';

@Component({
        selector: 'app-lecturer-add',
        templateUrl: './lecturer-add.component.html',
        styleUrls: ['./lecturer-add.component.css'],
        animations: [routerTransition()],
        host: { '[@routerTransition]': '' },
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule, RouterModule]
})

export class LecturerAddComponent implements OnInit {
        lecturerAddForm: FormGroup;
        index: any;

        constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private lecturerService: LecturerService, private toastr: ToastrService) {
                this.route.params.subscribe(params => {
                        this.index = params['id'];
                        if (this.index && this.index != null && this.index != undefined) {
                                this.getLecturerDetails(this.index);
                        } else {
                                this.createForm(null);
                        }
                });
        }

        ngOnInit() {
        }

        doRegister() {
                if (this.index && this.index != null && this.index != undefined) {
                        this.lecturerAddForm.value.id = this.index
                } else {
                        this.index = null;
                }
                let lecturerRegister = this.lecturerService.doRegisterLecturer(this.lecturerAddForm.value, this.index);
                if (lecturerRegister) {
                        if (lecturerRegister.code == 200) {
                                this.toastr.success(lecturerRegister.message, "Success");
                                this.router.navigate(['/lecturers']);
                        } else {
                                this.toastr.error(lecturerRegister.message, "Failed");
                        }
                }
        }

        getLecturerDetails(index: number) {
                let lecturerDetail = this.lecturerService.getLecturerDetails(index);
                this.createForm(lecturerDetail);
        }

        createForm(data: any) {
                if (data == null) {
                        this.lecturerAddForm = this.formBuilder.group({
                                first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                                last_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                                phone: ['', [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
                                email: ['', [Validators.required, ValidationService.emailValidator]]
                        });
                } else {
                        this.lecturerAddForm = this.formBuilder.group({
                                first_name: [data.lecturerData.first_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                                last_name: [data.lecturerData.last_name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
                                phone: [data.lecturerData.phone, [Validators.required, ValidationService.checkLimit(5000000000, 9999999999)]],
                                email: [data.lecturerData.email, [Validators.required, ValidationService.emailValidator]]
                        });
                }
        }

}
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
