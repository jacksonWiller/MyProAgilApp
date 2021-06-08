import { Evento } from "./Evento";
import { Palestrante } from "./Palestrante";

export interface RedeSocial {

    id: number;
    nome: string;
    URL: string; 
    EventoId: number; 
    Evento: Evento;
    PalestranteId: number; 
    Palestrante: Palestrante;
}
