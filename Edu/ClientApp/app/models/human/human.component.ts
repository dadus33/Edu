import { Component, OnInit, Inject } from '@angular/core';
import { Human } from './human.interface';
import { HumanService } from '../../services/human/human.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {

  humanFilter: Human = {
    id: undefined,
    name: undefined,
    dateOfBirth: undefined
  };

  searchResults: Human[] = [];

  constructor(private humanService: HumanService) { }

  ngOnInit() {
    this.updateSearch();
  }


  updateSearch() {
    this.humanService.searchHumans(this.humanFilter.id, this.humanFilter.name, this.humanFilter.dateOfBirth)
      .subscribe(
        (data) => {
          this.searchResults = data;
        },
        (error: HttpErrorResponse) => {
          if (error instanceof Error) {
            console.log("Client-side error: " + error.name + " - " + error.message);
          } else {
            console.log("Server-side error: " + error.error);
          }
          this.searchResults = [];
        }
      );
  }

  

}
