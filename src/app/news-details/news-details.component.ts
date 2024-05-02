import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Newsdetails } from '../Models/newsdetails';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit {

  unSubscribeAll = new Subject();
  news!:Newsdetails;

  constructor(private userService:UserService,private route:ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>
      {
        this.userService.getNewsDetails(res.id).pipe(
          takeUntil(this.unSubscribeAll)
        ).subscribe( (res:any)=>
        {
          this.news = res;   
          console.log(res);
                 
        } )
      })
    
  }


  onBack()
  {
    history.back()
  }
  ngOnDestroy(): void {
    this.unSubscribeAll.next(null);
    this.unSubscribeAll.complete();
  }
  
}
