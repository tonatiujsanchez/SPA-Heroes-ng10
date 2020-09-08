import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino:string = '';

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router:Router ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( resp =>{
      this.termino = resp['name'];
      this.heroes = this._heroesService.buscarHeroes( resp['name'] );
    });
  }

  verHeroe( idx:number ){
    this.router.navigate( [ '/heroe', idx ] );
  }

}
