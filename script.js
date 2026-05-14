// DATOS
const datos = {
    anime: [
        {nombre: "one piece", img: "https://areajugones.sport.es/wp-content/uploads/2019/09/OnePiecePoster.jpg"},
        {nombre: "Dragon Ball", img: "https://i.redd.it/faelooq2uype1.jpeg"},
        {nombre: "Attack on Titan", img: "https://static.wikia.nocookie.net/shingeki-no-kyojin/images/5/53/Primera_temporada_%28parte_1%29.png/revision/latest?cb=20181015211526&path-prefix=es"}
    ],
    juego: [
        {nombre: "Resident Evil", img: "https://i.3djuegos.com/juegos/18541/resident_evil_4_remake/fotos/ficha/resident_evil_4_remake-5789986.webp"},
        {nombre: "The Last of Us", img: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg"},
        {nombre: "God of War", img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"}
    ],
    pelicula: [
        {nombre: "Avengers", img: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/94/Avengers_Infinity_War_-_P%C3%B3ster_oficial.png/revision/latest?cb=20191029195530&path-prefix=es"},
        {nombre: "Star Wars", img: "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg"},
        {nombre: "lilo y stitch", img: "https://lumiere-a.akamaihd.net/v1/images/image_b024e3c0.jpeg?region=0,0,540,810"}
    ]
};

// REFERENCIAS
const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const preview = document.getElementById("preview");
const imagenDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHrVk03KkK6Nqym8aswZ7wQZ35MB6-KN16g&s";
preview.src = imagenDefault;

// CAMBIO DE TIPO
tipo.addEventListener("change", () => {

    nombre.innerHTML = '<option value="">-- Selecciona --</option>';
    nombre.className = "";
    tipo.className = "";

    if (!tipo.value) {
        preview.src = imagenDefault;
        return;
    }

    // COLOR DINÁMICO
    tipo.classList.add(tipo.value);
    nombre.classList.add(tipo.value);

    // CARGAR OPCIONES
    datos[tipo.value].forEach((item, index) => {
    let option = document.createElement("option");
    option.value = index; 
    option.textContent = item.nombre;
    nombre.appendChild(option);
    });
});

// CAMBIO DE NOMBRE
nombre.addEventListener("change", () => {

    // 🔥 si no hay nada seleccionado
    if (!tipo.value || nombre.value === "") {
        preview.src = imagenDefault;
        return;
    }

    let seleccion = datos[tipo.value][nombre.value];

    preview.src = seleccion.img;
});
// VALIDACIÓN
function continuar() {

    if (!tipo.value) {
        alert("Tienes que escoger un tipo de figura");
        return;
    }

    if (!nombre.value) {
        alert("Tienes que escoger un anime, juego o pelicula");
        return;
    }

    // pasar datos por URL
    window.location.href = `productos.html?tipo=${tipo.value}&nombre=${nombre.value}`;
}
let carrito = localStorage.getItem("carrito");

if (carrito) {
    document.getElementById("cartCount").textContent = carrito;
}

function agregarComentario() {

    const input = document.getElementById("comentarioInput");
    const lista = document.getElementById("comentariosLista");

    const texto = input.value.trim();

    if(texto === "") return;

    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");

    nuevoComentario.innerHTML = `
        <strong>Tú:</strong>
        <p>${texto}</p>
    `;

    lista.appendChild(nuevoComentario);

    input.value = "";

    /* Baja automáticamente */
    lista.scrollTop = lista.scrollHeight;
}