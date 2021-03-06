import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  excerciseDetails:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scheduleService : ScheduleService,
  ) { }

  ngOnInit() {
    this.scheduleService.loadExercise()
    .subscribe(
      data=>{
        this.excerciseDetails = data;
      }
    )


  }


  routePage(){
    
  }

}
