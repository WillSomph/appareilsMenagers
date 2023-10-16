import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Appareil } from '../models/appareil';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {
  appareilsList!: Appareil[];

  constructor(private router: Router,private appareilServices: AppareilsService) {

  }
  ngOnInit() {
    this.appareilsList= this.appareilServices.appareilsList.slice();
  }

  onLoadAppareil(appareil: {name: string,description: string[]}) {
    let navigationExtras: NavigationExtras = { // navigation ds une autre page avec des données
      state: {
        appareil: appareil // appareil: appareil, le premier est un nom donné par ns meme et le 2eme c la valeur du parametre
      }
    };
    this.router.navigate(['/single-appareil'], navigationExtras);
  }

}
