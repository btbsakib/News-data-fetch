import { Component ,OnInit} from '@angular/core';
import { DataServiceService } from './data-service.service';
import { newses,Article } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit{
   
  constructor(private data:DataServiceService) {}
  news!:Article[];
  ngOnInit() {
    this.data.fetchData().subscribe((valu) => {
    console.log(valu)
    this.news=valu.articles;
    });
  }
  
  }

