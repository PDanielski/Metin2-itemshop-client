import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CategoryService {
  private apiUrl: string;
  private cache: Category[];

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

   getAllCategories(): Observable<Category[]> {
    if(this.cache){
      return Observable.of(this.cache);
    } else {
      return this.httpClient.get<Category[]>(this.apiUrl+'/categories').do(categories => {
        this.cache = categories;
      });
    }
   }

   getCategoryByLink(link): Observable<Category> {
     if(this.cache){
       for(let category of this.cache){
         if(category.link === link) return Observable.of(category);
       }
     } else {
      return this.httpClient.get<Category>(this.apiUrl+'/categories/'+link);
     }
   }
}
