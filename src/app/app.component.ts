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

    // this.api.Echo('is mac').then(
    //   e => console.log(e)
    // );

    this.api.Returnecho(0, 'userA', '79b5467d-e7e4-4580-9aed-1e5d2b97e42b').then(
      e => {
        console.log(e, JSON.parse(e.body));
      }
    );

    // this.api.ListShips().then(
    //   e => console.log(e)
    // ).catch(e => console.log(e));

  }


}
