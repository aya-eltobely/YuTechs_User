import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { News } from '../Models/news';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})
export class NewsListComponent implements OnInit , OnDestroy {

  unSubscribeAll = new Subject();
  allNews!:News[];

  constructor(private userService:UserService,private router:Router) {
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews()
  {
    this.userService.getAllNews().pipe(
      takeUntil(this.unSubscribeAll)
    ).subscribe((res:any)=>
    {
      this.allNews=res;
    });

  }

  openDetails(id:any)
  {

    this.router.navigate([`/newDetails/${id}`] )
  }

  ngOnDestroy(): void {
    this.unSubscribeAll.next(null);
    this.unSubscribeAll.complete();
  }




}
