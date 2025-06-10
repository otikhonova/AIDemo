/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { LecturerService } from '../../../services/lecturer/lecturer.service';
import { routerTransition } from '../../../services/config/config.service';

@Component({
        selector: 'app-lecturer-list',
        templateUrl: './lecturer-list.component.html',
        styleUrls: ['./lecturer-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class LecturerListComponent implements OnInit {
        lecturerList: any;
        lecturerListData: any;
        filterData: string = '';
        constructor(private lecturerService: LecturerService, private toastr: ToastrService) { }
        // Call lecturer list function on page load
        ngOnInit() {
                this.getLecturerList();
        }

        // Get lecturer list from services
        getLecturerList() {
                let lecturerList = this.lecturerService.getAllLecturers();
                this.success(lecturerList)
        }

        // Get lecturer list success
        success(data: any) {
                this.lecturerListData = data.data;
                for (var i = 0; i < this.lecturerListData.length; i++) {
                        this.lecturerListData[i].name = this.lecturerListData[i].first_name + ' ' + this.lecturerListData[i].last_name;
                }
        }

        // Delete a lecturer with its index
        deleteLecturer(index: number) {
                // get confirm box for confirmation
                let r = confirm("Are you sure?");
                if (r == true) {
                        let lecturerDelete = this.lecturerService.deleteLecturer(index);
                        if (lecturerDelete) {
                                this.toastr.success("Success", "Lecturer Deleted");
                        }
                        this.getLecturerList();
                }
        }
}
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
