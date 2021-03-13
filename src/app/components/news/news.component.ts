import { NoticiasService } from './../../services/noticias.service';
import { Component, OnInit } from '@angular/core';
import { NoticiasInterfaz } from 'src/app/utils/NoticiasInterfaz';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  noticias: NoticiasInterfaz[] = [];
  texto: string = '';
  imagen: string = 'assets/images/news_photo.jpg';
  variableMostrar = false;

  constructor(private servicioNoticias: NoticiasService) {}

  ngOnInit(): void {
    this.noticias = this.servicioNoticias.getAllNoticias();
  }

  getNoticiasFiltradas(busqueda: string) {
    this.noticias = this.servicioNoticias.getNoticiasFiltradas(busqueda);
  }
  cambiarAlert(contenido: string, fondo: string) {
    this.texto = contenido;
    this.imagen = fondo;
    this.variableMostrar = true;
  }
}
