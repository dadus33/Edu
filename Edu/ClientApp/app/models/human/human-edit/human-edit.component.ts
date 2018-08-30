import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, formatDate } from '@angular/common';
import { HumanService } from '../../../services/human/human.service';
import { Human } from '../human.interface';

@Component({
  selector: 'app-human-edit',
  templateUrl: './human-edit.component.html',
  styleUrls: ['./human-edit.component.css']
})
export class HumanEditComponent implements OnInit {

  private human: Human = {
    name: undefined,
    dateOfBirth: undefined,
    id: undefined
  }
  private loaded: boolean = false;
  private responseString: string = "";

  constructor(private route: ActivatedRoute, private location: Location, private humanService: HumanService, private router: Router) { }

  ngOnInit() {
    let idString: string = this.route.snapshot.paramMap.get("id");

    if (idString == null) {
      this.location.back();
      return;
    }

    let id: number = Number.parseInt(idString);
    if (!Number.isInteger(id)) {
      this.location.back();
      return;
    }

    if (id == 0) {
      this.location.back();
      return;
    }

    this.humanService.getHuman(id).subscribe(
      (data) => {
        this.loadHuman(data);
        this.loaded = true;
      },
      (error) => {
        this.location.back();
      }
    );
  }

  save() {
    if (!this.loaded) {
      return;
    }

    this.humanService.updateHuman(this.human).subscribe(
      (data) => {
        this.loadHuman(data);
        this.responseString = "Successful update!";
      },
      (error) => {
        this.responseString = "Update failed! Reloading!";
        this.router.navigateByUrl(this.router.url);
      }
    )
  }


  loadHuman(data: Human) {
    this.human = data;
    this.human.dateOfBirth = formatDate(this.human.dateOfBirth, "yyyy-MM-dd", "en_US");
  }

}
