import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  appareilName:any;
  appareil!: {
    name: string;
    description: string[];
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.appareil=this.router.getCurrentNavigation()?.extras.state?.['appareil'];
        console.log(this.appareilName);
      }
    });
   }

  ngOnInit() {
  }
}