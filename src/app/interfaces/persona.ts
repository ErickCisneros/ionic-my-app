import { Mascota } from './mascota';

export interface Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    telefono: string;
    edad: number;
    mascotas: Mascota[];
}
