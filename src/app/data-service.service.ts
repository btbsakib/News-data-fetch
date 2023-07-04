import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { newses,Article,Source } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  
  

  constructor(private http: HttpClient) {
    
  }
 
 /*
  fetchData():Observable<Source> {
    return this.http.get<Source>('https://newsapi.org/v2/everything?q=tesla&from=2023-05-25&sortBy=publishedAt&apiKey=ce6bf5d0d6ff4a63b0428284a4e55c39')
   }
   */
 
   /*
    fetchData():Observable<Article> {
    return this.http.get<Article>('https://newsapi.org/v2/everything?q=tesla&from=2023-05-25&sortBy=publishedAt&apiKey=ce6bf5d0d6ff4a63b0428284a4e55c39')
    }
  */ 

    fetchData():Observable<newses> {
      return this.http.get<newses>('https://newsapi.org/v2/everything?q=tesla&from=2023-06-04&sortBy=publishedAt&apiKey=ce6bf5d0d6ff4a63b0428284a4e55c39')
      }

 
 
}
