import { Injectable } from '@angular/core';
import { thefeedback} from './the-feedback';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }
  public getTheSeaData(): thefeedback[] {
    let thefeedback: thefeedback[] = [
      {
        storyImg: "assets/nat-8.jpg",
        storyName: "Mary Smith",
        storyHeading: "I had the best week ever with my family",
        storytext: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum sapiente aspernatur
        libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
        repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.`
      },
      {
          
        storyImg: "assets/nat-9.jpg",
        storyName: "Jack Wilson",
        storyHeading: "WOW! My life is completely different now",
        storytext: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum sapiente aspernatur
        libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
        repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.`
      },
    ];
    
    return thefeedback;
}
}
