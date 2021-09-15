import { Component, OnInit } from '@angular/core';
import { DataRestService } from './data.service';
import { Posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  posts1: Posts[]=[];

  constructor(public restService:DataRestService){ }

  ngOnInit(){
    this.restService.getPosts()
    .subscribe(
      (response)=>
      {
        this.posts1 = response;
        //console.log(this.posts1);
      },
      (error) => console.log(error)
    );
  }

}
