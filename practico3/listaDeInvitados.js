let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];
let listaRechazados = "La lista de invitados rechazados es: ";
let listaAdmitidos = "La lista de invitados admitidos es: ";
let listaOrdenadaRechazados = "La lista ordenada de invitados rechazados es: ";
let listaOrdenadaAdmitidos = "La lista ordenada de invitados admitidos es: ";

for (let i=0; i<personas.length; i++) {
    if(personas[i]==="Jose"|| personas[i]==="Sofia"){
        rechazados.push(personas[i])
    }else {
        admitidos.push(personas[i])
    } 
}

for (let i=0; i<rechazados.length; i++){
    listaRechazados += rechazados[i];  
    if (i!==rechazados.length - 1){
     listaRechazados += ", ";  
    }else {
        listaRechazados += ".";
    }
}
console.log(listaRechazados);


for (let i=0; i<admitidos.length; i++){
    listaAdmitidos += admitidos[i];  
    if (i!==admitidos.length - 1){
     listaAdmitidos += ", ";  
    }else {
        listaAdmitidos += ".";
    }
}

console.log(listaAdmitidos);


for (let i=0; i<rechazados.sort().length; i++){

    listaOrdenadaRechazados += rechazados[i];  
    if (i!==rechazados.length - 1){
     listaOrdenadaRechazados += ", ";  
    }else {
        listaOrdenadaRechazados += ".";
    }
}
console.log(listaOrdenadaRechazados);

    
for (let i=0; i<admitidos.sort().length; i++){
     listaOrdenadaAdmitidos += admitidos[i];  
    if (i!==admitidos.length - 1){
     listaOrdenadaAdmitidos += ", ";  
    }else {
        listaOrdenadaAdmitidos += ".";
    }
}
console.log(listaOrdenadaAdmitidos);