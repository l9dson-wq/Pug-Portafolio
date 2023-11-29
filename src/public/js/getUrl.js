const Homepage = document.getElementById('HomepageLink');
const AboutPage = document.getElementById('AboutLink');
const TechnologiesPage = document.getElementById('TechsLink');
const ProjectsPage = document.getElementById('ProjectsLink');
const BlogPage = document.getElementById('BlogLink');

// Obtener la URL actual y ultimo parametro
var urlActual = window.location.href;
var partesURL = urlActual.split('/');
var ultimoElemento = partesURL[partesURL.length - 1];

console.log('URL actual:', urlActual);
console.log('Último parámetro o ubicación:', ultimoElemento);

if (ultimoElemento == "") {
    Homepage.style.textDecoration = "underline";
}

if (ultimoElemento == "about") {
    AboutPage.style.textDecoration = "underline";
}

if (ultimoElemento == "Technologies") {
    TechnologiesPage.style.textDecoration = "underline";
}

if (ultimoElemento == "Projects") {
    ProjectsPage.style.textDecoration = "underline";
}

if (ultimoElemento == "Blog") {
    BlogPage.style.textDecoration = "underline";
}