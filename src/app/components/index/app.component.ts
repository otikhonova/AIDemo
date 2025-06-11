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
                first_name : "Albert",
                last_name : "Hodges",
                email : "albert@yopmail.com",
                phone : 9011223344
        },
        {
                id : 2,
                first_name : "Julia",
                last_name : "Reeves",
                email : "julia@yopmail.com",
                phone : 9800112233
        },
        {
                id : 3,
                first_name : "Cindy",
                last_name : "Adams",
                email : "cindy@yopmail.com",
                phone : 9456677889
        }
        ];

        constructor() {
                // Save students to localStorage
                localStorage.setItem('students', JSON.stringify(this.studentsList));
                // Save lecturers to localStorage
                localStorage.setItem('lecturers', JSON.stringify(this.lecturersList));
        }
}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
