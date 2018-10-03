import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any={};
   
  constructor(private _activatedRouter:ActivatedRoute,private _heroesService:HeroesService) {
    this._activatedRouter.params.subscribe( 
      params =>{
        console.log(params['id']);
        this.heroe=this._heroesService.getHeroe(params['id']);
    } );
   }

  ngOnInit() {
  }

}