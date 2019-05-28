import { Component, OnInit } from '@angular/core';
import { ListComponent } from './../list/list.component';
import { RestService } from '../rest.service';
import { PagerService } from '../pager.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-test-takers',
  templateUrl: './test-takers.component.html',
  styleUrls: ['./test-takers.component.css']
})
export class TestTakersComponent implements OnInit {
  
  testTakers:any = []
  pager: any = {};
  pagedItems: any[];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router, private pagerService: PagerService) { }
  
  ngOnInit() {
    this.getTestTakers();
  }

  getTestTakers() {
    this.testTakers = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.testTakers = data;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    this.pager = this.pagerService.getPager(this.testTakers.length, page);
    this.pagedItems = this.testTakers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
