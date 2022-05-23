let arregloAa: number[] = new Array(6);
let arregloBe: number[] = new Array(6);
let sumaDeArregloss: number[] = new Array(6);
let indice: number;
for (indice = 0; indice < 6; indice++) {
  arregloA[indice] = Number(
    prompt("ingrese el numero de la posicion $(indice): ")
  );
}
for (indice = 0; indice < 6; indice++) {
  arregloB[indice] = Number(
    prompt("ingrese el numero de la posicion $(indice): ")
  );
}
for (indice = 0; indice < 6; indice++) {
  sumaDeArreglos[indice] = 0;
}
for (indice = 0; indice < 6; indice++) {
  sumaDeArreglos[indice] = arregloA[indice] + arregloB[indice];
}
for (indice = 0; indice < 6; indice++) {
  console.log("la suma de arreglos es: sumaDeArreglos[indice])");
}
