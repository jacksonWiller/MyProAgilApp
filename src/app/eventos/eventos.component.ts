import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
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
