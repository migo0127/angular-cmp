import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { SideNavList } from 'src/app/model';
import { SideNavService } from 'src/app/service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  sideNavList: SideNavList[];
  isSideNavVisible: boolean;

  constructor(
    private router: Router,
    private sideNavService: SideNavService,
  ) { }

  ngOnInit(): void {
    const obj: Observable<[SideNavList[], boolean]> = forkJoin([
      this.sideNavService.getSideNavList(),
      this.sideNavService.getSideNavVisibility(),
    ]);

    obj.subscribe(([list, isVisible]: [SideNavList[], boolean])  => {
      this.sideNavList = list;
      this.isSideNavVisible = isVisible
    });
  }

  navigateTo(list: SideNavList): void{
    if(!list.url && !list.children){
      return;
    }else if(!list.url && list.children){
      list.visible = !list.visible;
    }else{
      this.router.navigate([`${ list.url }`]);
    }
  }
}
