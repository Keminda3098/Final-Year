import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { config } from '../config/config.js';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }



   loadById(id) {
     console.log(id)
    return this.http.get(config.PAPYRUS+`/shedule/loadById/${id}`)
   }



   getAcceptedSchedule() {
    return this.http.get(config.PAPYRUS+`/shedule/getAcceptedSchedule`)
  }
   




   RejectRecord(id){
     console.log(id);
     let data = {
       id:id
     }
    return this.http.post(config.PAPYRUS+`/shedule/RejectRecord` , data);
   }
   updateRecord(id) {
    return this.http.get(config.PAPYRUS+`/shedule/updateRecord/${id}`)
   }

   getPendings() {
    return this.http.get<any>(config.PAPYRUS+`/shedule/getPendings`)
   }

   getMySchedule(userId) {
    return this.http.get(config.PAPYRUS+`/shedule/getMySchedule/${userId}`)
   }
  getscedultType() {
    return this.http.get<any>(config.PAPYRUS+`/shedule/getAllSchedule`)
  }

  insertScheduleData(data){
    return this.http.post(config.PAPYRUS+`/shedule/insertData` , data);
  
  }
}