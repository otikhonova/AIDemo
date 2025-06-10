import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { StudentService } from './services/student/student.service';
import { LecturerService } from './services/lecturer/lecturer.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { StudentListComponent } from './components/student/list/student-list.component';
import { StudentDetailsComponent } from './components/student/details/student-details.component';
import { StudentAddComponent } from './components/student/add/student-add.component';
import { LecturerListComponent } from './components/lecturer/list/lecturer-list.component';
import { LecturerDetailsComponent } from './components/lecturer/details/lecturer-details.component';
import { LecturerAddComponent } from './components/lecturer/add/lecturer-add.component';
import { LecturerHomeComponent, lecturerChildRoutes } from './components/lecturer/home/lecturer-home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightStudentDirective } from './directives/highlight-student.directive';



// Parent Routes
const routes: Routes = [
        {
                path: '',
                component: HomeComponent,
                children: homeChildRoutes,
                canActivate: [AuthService]
        },
        {
                path: 'lecturers',
                component: LecturerHomeComponent,
                children: lecturerChildRoutes,
                canActivate: [AuthService]
        },
        {
                path: 'login',
                component: LoginComponent
        },
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
        declarations: [
                AppComponent,
                StudentListComponent,
                StudentDetailsComponent,
                StudentAddComponent,
                LecturerListComponent,
                LecturerDetailsComponent,
                LecturerAddComponent,
                LecturerHomeComponent,
                LoginComponent,
                HomeComponent,
                FilterPipe,
                PhonePipe,
                HighlightStudentDirective
	],
	imports: [
		BrowserModule,
		RouterModule,
		RouterModule.forRoot(routes),
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
	],
        providers: [AuthService, UserService, StudentService, LecturerService],
        bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
