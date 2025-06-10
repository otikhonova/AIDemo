/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

        // Add few students for initial listing
        studentsList = [
	{	
		id : 1,
		first_name : "Sangwin",
		last_name : "Gawande",
		email : "sangwin@yopmail.com",
		phone : 9503733178,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Oman",
		last_name : "Umir",
		email : "oman@yopmail.com",
		phone : 8574889658,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Tina",
		last_name : "Dillon",
		email : "tina@yopmail.com",
		phone : 7485889658,
		department : "Science"
	},
	{
		id : 4,
		first_name : "John",
		last_name : "Doe",
		email : "john@yopmail.com",
		phone : 9685589748,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Peter",
		last_name : "Parker",
		email : "peter@yopmail.com",
		phone : 8595856547,
		department : "Engineering"
	}
        ];

        // Add few lecturers for initial listing
        lecturersList = [
        {
                id : 1,
                first_name : "Prof. Xavier",
                last_name : "Smith",
                email : "xavier@yopmail.com",
                phone : 9876543210,
                department : "Science"
        },
        {
                id : 2,
                first_name : "Dr. Jane",
                last_name : "Doe",
                email : "jane@yopmail.com",
                phone : 9123456780,
                department : "Arts"
        }
        ];

	constructor() {
                // Save students and lecturers to localStorage
                localStorage.setItem('students', JSON.stringify(this.studentsList));
                localStorage.setItem('lecturers', JSON.stringify(this.lecturersList));
        }
}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
