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
const batimovil2: {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
} = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

type Cars = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

const bumblebee2: Cars = {
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
type Villian = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};
const villanos2: Villian[] = [
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
type Charles = {
  poder: string;
  estatura: number;
};
const charles2: Charles = {
  poder: "psiquico",
  estatura: 1.78,
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};
const apocalipsis2 = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique2: Charles | Apocalipsis;

mystique2 = charles2;
mystique2 = apocalipsis2;
