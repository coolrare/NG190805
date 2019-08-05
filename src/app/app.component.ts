import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = '';

  ngOnInit() {
    fetch('/api/articles.json')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    });
  }

  clearKeyword() {
    this.keyword = '';
  }

  doSearch(keyword: string) {
    this.keyword = keyword;
    alert('You searched: ' + keyword);
  }
}
