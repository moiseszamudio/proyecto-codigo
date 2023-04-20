import { Origin } from "./origin";

export class  Personaje {

    id?: number;
    name?:string;
    status?:string;
    species?: string;
    type?:string;
    gender?:string;
    origin?: Origin = new Origin();
    image?:string;
    episode?:string[] = [];
    url?:string;
    created?:Date;
    mostrar?:string = 'none';
}