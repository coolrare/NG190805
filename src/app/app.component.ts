import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = '';

  data: any;

  constructor(private datasvc: DataService) {
  }

  ngOnInit() {
    this.datasvc.load().subscribe((data) => {
      this.data = data;
    });
  }

  deleteArticle(id) {
    console.log('刪除文章: ' + id);
  }

  clearKeyword() {
    this.keyword = '';
  }

  doSearch(keyword: string) {
    this.keyword = keyword;
    alert('You searched: ' + keyword);
  }
}
