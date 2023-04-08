import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfoService,  } from 'src/app/service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {

  }

}
