// Obtener la URL actual
var urlActual = window.location.href;

// Dividir la URL en partes utilizando '/' como separador
var partesURL = urlActual.split('/');

// Obtener el último elemento de las partes (puede ser el último parámetro o la última parte de la ruta)
var ultimoElemento = partesURL[partesURL.length - 1];

console.log('URL actual:', urlActual);
console.log('Último parámetro o ubicación:', ultimoElemento);
