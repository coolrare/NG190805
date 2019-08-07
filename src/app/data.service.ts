import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  load() {

    return fetch('/api/articles.json')
      .then((res) => {
        return res.json();
      });

  }
}
