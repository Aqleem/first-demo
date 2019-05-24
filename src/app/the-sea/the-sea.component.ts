import { Component, OnInit } from "@angular/core";
import { CServicesService } from "../c-services.service";
import { theSea } from "../the-sea";

@Component({
  selector: "app-the-sea",
  templateUrl: "./the-sea.component.html",
  styleUrls: ["./the-sea.component.scss"]
})
export class TheSeaComponent implements OnInit {
  theSea: theSea[];
  constructor(private cServicesService: CServicesService) {}

  ngOnInit() {
    this.theSea = this.cServicesService.getTheSeaData();
  }
}
