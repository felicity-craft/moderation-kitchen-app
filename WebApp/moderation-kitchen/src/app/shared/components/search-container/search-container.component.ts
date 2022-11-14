import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  categories: string[] = [
    'Cookies',
    'Cakes',
    'Chocoalte',
    'Easy',
    'Slices',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
