import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaypalDonationService {
  private apiUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getLinkFromPackage(packageId: string): Observable<string>{
    return this.httpClient.get<string>(this.apiUrl + '/paypal/link/'+packageId);
  }

}
