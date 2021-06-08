import { Palestrante } from "./Palestrante";
import { RedeSocial } from "./RedeSocial";

export interface Evento 
{

    id: number;
    local: string;
    dataEvento: Date;
    tema: string;
    qtdPessoas: number;
    imagemURL: string;
    telefone: string;
    email: string;
    lotes: string;
    redesSociais: RedeSocial [];
    palestrantesEventos: Palestrante[];
}
  