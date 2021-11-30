export interface Ropa {
    nombre: string;
    modelo: string;
    fotos?: (FotosEntity)[] | null;
    colores?: (ColoresEntity)[] | null;
    precio: number;
    tallas?: (TallasEntity)[] | null;
}
export interface FotosEntity {
    id: number;
    imagen: string;
}
export interface ColoresEntity {
    color: string;
    nombre: string;
}
export interface TallasEntity {
    talla: string;
}
