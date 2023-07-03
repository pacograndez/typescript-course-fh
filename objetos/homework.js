"use strict";
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        // El metodo disparar es opcional
        console.log("Disparando");
    },
};
// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
// Resolucion de tarea - Objetos
// Objetos
const batimovil2 = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee2 = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        // El metodo disparar es opcional
        console.log("Disparando");
    },
};
const villanos2 = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles2 = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis2 = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique2;
mystique2 = charles2;
mystique2 = apocalipsis2;
