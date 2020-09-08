import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe:any = {};
  @Input() idx: number = 0;

  @Output() heroeSelecconado: EventEmitter<number>;
  
   constructor( private router: Router ) { 
     this.heroeSelecconado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate( [ '/heroe', this.idx ] );
    // this.heroeSelecconado.emit( this.idx );
  }

}
