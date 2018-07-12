import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private quiz: QuizService) {
    this.quiz = quiz;
    // shows description defined in the QuizService
    console.log(this.quiz.description);
   }
    
  ngOnInit() {
  }

}
