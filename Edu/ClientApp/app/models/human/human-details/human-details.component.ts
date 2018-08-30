import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Human } from '../human.interface';
import { HumanService } from '../../../services/human/human.service';
import { ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'app-human-details',
  templateUrl: './human-details.component.html',
  styleUrls: ['./human-details.component.css']
})
export class HumanDetailsComponent implements OnInit {

  private human: Human
  constructor(private humanService: HumanService, private route: ActivatedRoute, private location: Location) { }

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
        this.human = data;
      },
      (error) => {
        this.location.back();
      }
    );
  }

}
