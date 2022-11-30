import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""

  constructor(private api:ApiService){}

  readValues = () =>
  {
    let data:any ={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
    console.log(data)
    this.api.addCourses(data).subscribe(
      (response)=>{console.log(response)}
    )
  }

}
