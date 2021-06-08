import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { Evento } from '../_models/Evento';
import { EventoService } from '../_service/evento.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventosFiltrados: any = [];
  eventos: any =[] ;
  evento: any;
  imagemAltura: number = 50;
  imagemMargem: number = 2;
  mostrarImagem = false;
  modalRef!: BsModalRef;
  
  constructor(
    private eventoService: EventoService
   ,private modalService: BsModalService  
  ) { }

  _filtroLista = '';
  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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

  //Get eventos observibles
  getEventos(){
    this.eventoService.getAllEvento().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
        console.log(_eventos)
      }, erro => {
        console.log(erro);
      });
  }

}