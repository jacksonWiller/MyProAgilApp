import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  _filtroLista = '';
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;    
  }
  
  eventosFiltrados: any = [];
  eventos: any =[] ;
  evento: any;
  imagemAltura: number = 50;
  imagemMargem: number = 2;
  mostrarImagem = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

   filtrarEventos(filtrarPor: string) { 
     filtrarPor = filtrarPor.toLocaleLowerCase() 
     return this.eventos.filter((evento: { tema: string; }) => { 
       return evento.tema.toLocaleLowerCase().includes(filtrarPor) 
     }) 
   }

  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }

  getEventos(){
    this.eventos = this.http.get(" https://localhost:5001/evento").subscribe(response => {
        this.eventos = response
        console.log(response)
      }, erro => {
        console.log(erro);
      });
  }

}
