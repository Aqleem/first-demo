import { Injectable } from "@angular/core";
import { theSea } from "./the-sea";

@Injectable({
  providedIn: "root"
})
export class CServicesService {
  constructor() {}

  public getTheSeaData(): theSea[] {
    let seaData: theSea[] = [
      {
        cardHeaderImg: "card__picture card__picture--1",
        cardHeading: "The Sea Explorer",
        data: [
          "3 day tours",
          "Up to 30 people",
          "2 tour guides",
          "Sleep in cozy hotels",
          "Difficulty: easy"
        ],
        cardBackgroundClass: "card__side card__side--back card__side--back-1",
        price: "$297"
      },
      {
        cardHeaderImg: "card__picture card__picture--2",
        cardHeading: "The Forest Hiker",
        data: [
          "7 day tours",
          "Up to 40 people",
          "6 tour guides",
          "Sleep in provided tents",
          "Difficulty: medium"
        ],
        cardBackgroundClass: "card__side card__side--back card__side--back-2",
        price: "$497"
      },
      {
        cardHeaderImg: "card__picture card__picture--3",
        cardHeading: "The Snow Adventurer",
        data: [
          "5 day tours",
          "Up to 15 people",
          "3 tour guides",
          "Sleep in provided tents",
          "Difficulty: hard"
        ],
        cardBackgroundClass: "card__side card__side--back card__side--back-3",
        price: "$897"
      }
    ];

    return seaData;
  }
}
