import { Component, OnInit } from '@angular/core';

import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private api: APIService
  ) {}

  ngOnInit(): void {
    this.api.ListShips().then(
      e => console.log(e)
    );
    this.api.Echo('is mac').then(
      e => console.log(e)
    );
  }


}
