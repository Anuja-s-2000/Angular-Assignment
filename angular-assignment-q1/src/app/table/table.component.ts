import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Posts } from '../posts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})

export class TableComponent implements OnChanges {
  @Input() posts1 : Posts[]=[];
  posts: Posts[]=[];
  page=1;
  pageSize=10;
  collectionSize=this.posts1.length;

  constructor() { 
  }

  ngOnChanges(): void {
    //console.log("Posts:",this.posts1);
    this.collectionSize=this.posts1.length;
    this.refreshPosts();
  }
  
  public refreshPosts() {
    this.posts = this.posts1.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
