import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { thefeedback } from "../the-feedback";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
feedback : thefeedback [];
constructor(private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.feedback = this.feedbackService.getTheSeaData();

  }

}
