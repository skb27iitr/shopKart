import { TeamService } from './../team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css']
})
export class IplComponent implements OnInit {

  teams$;
  arr = [1, 2, 3, 4];

  constructor(private teamService: TeamService) {
    this.teams$ = teamService.getAll();

    for (let entry of this.arr) {
      console.log(entry); // 1, "string", false
    }

  }

  ngOnInit() {
  }

}
