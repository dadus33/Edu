import { Component, OnInit } from '@angular/core';
import { Human } from '../human.interface';
import { HumanService } from '../../../services/human.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-human-add',
  templateUrl: './human-add.component.html',
  styleUrls: ['./human-add.component.css']
})
export class HumanAddComponent implements OnInit {

  message: string = "";

  human: Human = {
    id: undefined,
    name: undefined,
    dateOfBirth: undefined
  }


  constructor(private humanService: HumanService, private router: Router) { }

  ngOnInit() {
  }

  addHuman() {
    if (!this.canAdd()) {
      return;
    }
    this.humanService.createHuman(this.human).subscribe(
      (data) => {
        if (data) {
          this.human = data;
          this.message = "Item added! Going back to the list..."
          this.router.navigateByUrl("/humans");
        } else {
          this.message = "Invalid data submitted! Reloading page...";
          this.router.navigateByUrl(this.router.url);
        }
      }
    )
  }

  canAdd(): boolean {
    return ((this.human.name != undefined) && (this.human.dateOfBirth != undefined));
  }

}
