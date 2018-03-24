import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Package } from './package.model';

@Injectable()
export class PackageService {
  private apiUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getPackages():Observable<Package[]> {
    return this.httpClient.get<Package[]>(this.apiUrl + '/packages');
  }

}
