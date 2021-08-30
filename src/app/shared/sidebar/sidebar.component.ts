import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  buscar( termino: string ) {
    // console.log(termino);
    this.gifsService.buscarGifs( termino );
  }

  borrar( termino: string ) {
    this.gifsService.borrarGifs( termino );
  }
  
  constructor(private gifsService: GifsService) { }

}