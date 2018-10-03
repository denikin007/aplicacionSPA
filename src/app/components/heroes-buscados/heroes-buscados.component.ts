import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes-buscados',
  templateUrl: './heroes-buscados.component.html'
})
export class HeroesBuscadosComponent implements OnInit {

  heroes:any[]=[];
  termino:string;
  constructor(private activatedRouter:ActivatedRoute,private _heroesService:HeroesService, private router:Router) {
    
   }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      params => {
        this.termino= params['nombre'];
        this.heroes=this._heroesService.buscarHeroes(params['nombre']);
      }
    );
    console.log(this.heroes);
  }

  verHeroe(index : number){
    this.router.navigate(['/heroe', index]);
  }


}
