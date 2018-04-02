import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventDispatcher } from './core/event/event-dispatcher.service';
import { TokenStorageService } from './core/authentication/token/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,public tokenStorage: TokenStorageService,private eventDispatcher: EventDispatcher){}

  ngOnInit(){
    console.log("Inizio log per zase");
    console.log(this.tokenStorage.getToken());
    console.log(this.tokenStorage.getToken().isExpired());
    console.log("Fine log");
    if(!this.tokenStorage.getToken() || this.tokenStorage.getToken().isExpired()){
      this.router.navigate(['/login']);
    }
    
    this.eventDispatcher.dispatch("app.start");
  }

}
