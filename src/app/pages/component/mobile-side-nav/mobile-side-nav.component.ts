import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavList } from 'src/app/model';
import { SideNavService } from 'src/app/service';

@Component({
  selector: 'app-mobile-side-nav',
  templateUrl: './mobile-side-nav.component.html',
  styleUrls: ['./mobile-side-nav.component.scss']
})
export class MobileSideNavComponent implements OnInit {

  sideNavList: SideNavList[];

  constructor(
    private router: Router,
    private sideNavService: SideNavService,
  ) { }

  ngOnInit(): void {
    this.sideNavService.getSideNavList().subscribe((list: SideNavList[]) => {
      this.sideNavList = list;
    });
  }

  navigateTo(list: SideNavList, e: Event): void{
    if(!list.url && !list.children){
      return;
    }else if(!list.url && list.children){
      e.stopPropagation();
      list.visible = !list.visible;
    }else{
      this.router.navigate([`${ list.url }`]);
    }
  }

}
