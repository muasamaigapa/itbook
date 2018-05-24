import { Component, OnInit} from '@angular/core';
import { IBook } from '../interfaces/IBook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  books: IBook[] = [
    {name: 'Angular Cơ Bản', image: 'assets/asset-3.png', link: '#'},
    {name: 'Xây dựng RestFull API với NodeJS', image: 'assets/asset-0.png', link: '#'},
    {name: 'Mongo DB', image: 'assets/asset-5.png', link: '#'},
    {name: 'Lập trình Front-End Cơ Bản', image: 'assets/asset-1.png', link: '#'},
    {name: 'Lập Trình C++', image: 'assets/asset-2.png', link: '#'},
    {name: 'Angular Cơ Bản', image: 'assets/asset-3.png', link: '#'}
  ];
  keyword: String = '';
  selectedBook: IBook;

  isViewList:boolean = false;
  changed:boolean = false;
  
  changeOption(b:boolean){
    this.isViewList = b;
    this.changed = !this.changed;
  }
}
