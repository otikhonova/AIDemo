/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

 import { Injectable } from '@angular/core';

 @Injectable()
export class LecturerService {

   constructor() { }

   // Get all students list via API or any data storage
  getAllLecturers(){
    let lecturerList:any;
    if(localStorage.getItem('lecturers') && localStorage.getItem('lecturers') != '') {
      lecturerList = {
        code : 200,
        message : "Lecturers List Fetched Successfully",
        data : JSON.parse(localStorage.getItem('lecturers') || '')
      }
    }else{
      lecturerList = {
        code : 200,
        message : "Lecturers List Fetched Successfully",
        data : JSON.parse(localStorage.getItem('lecturers') || '')
      }
    }
    return lecturerList;
  }

  doRegisterLecturer(data: any, index: number){
    let lecturerList = JSON.parse(localStorage.getItem('lecturers') || '');
    let returnData;
    if(index != null) {
      for (var i = 0; i < lecturerList.length; i++) {
        if (index != i && lecturerList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }

       lecturerList[index] = data;
       localStorage.setItem('lecturers',JSON.stringify(lecturerList));
       returnData = {
        code : 200,
        message : "Lecturer Successfully Updated",
        data : JSON.parse(localStorage.getItem('lecturers') || '')
       }
    }else{
       data.id = this.generateRandomID();
       for (var i = 0; i < lecturerList.length; i++) {
         if (lecturerList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }
       lecturerList.unshift(data);

       localStorage.setItem('lecturers',JSON.stringify(lecturerList));

       returnData = {
        code : 200,
        message : "Lecturer Successfully Added",
        data : JSON.parse(localStorage.getItem('lecturers') || '')
       }
    }
    return returnData;
  }

  deleteLecturer(index:number){
    let lecturerList = JSON.parse(localStorage.getItem('lecturers') || '');

    lecturerList.splice(index, 1);

    localStorage.setItem('lecturers',JSON.stringify(lecturerList));

    let returnData = {
      code : 200,
      message : "Lecturer Successfully Deleted",
      data : JSON.parse(localStorage.getItem('lecturers') || '')
    }

     return returnData;
   }



  getLecturerDetails(index:number){
    let lecturerList = JSON.parse(localStorage.getItem('lecturers') || '');

    let returnData = {
      code : 200,
      message : "Lecturer Details Fetched",
      lecturerData : lecturerList[index]
    }

     return returnData;
   }


   generateRandomID() {
     var x = Math.floor((Math.random() * Math.random() * 9999));
     return x;
   }

 }
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
