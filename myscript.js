
const myLibrary = [];


function Book(title, author, pages, read){
    //Este sería nuestro constructor para nuestro objeto de tipo libro
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function(){
		return this.title + ", " + this.author + ", " + this.pages + ", " + this.read + "."
    }
}

function addToLibrary(title, author, pages, read){
    //Esta función lo que hace es a partir de los parametros crear un objeto de tipo Book y agregarlo a nuestra lista
    //en la que se almacenarán todos los libros, esta lista es myLibrary.
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

//usamos nuestra función de crear el libro y agregarlo a la librería
//addToLibrary("Biblia", "Diosito", 134, "No leído");
//addToLibrary("Biblia 2", "Yo mero", 666, "Leído");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

const button = document.getElementById("myButton");


let listaHTML = "<ul>";

myLibrary.forEach(elemento =>{
    listaHTML += `<li>${elemento.info()}</li>`;
});

listaHTML += "</ul>";

document.getElementById("lista").innerHTML = listaHTML;

button.addEventListener("click", () =>{
    
    const value1 = title.value;
    const value2 = author.value;
    const value3 = pages.value;
    const value4 = read.value;

    addToLibrary(value1, value2, value3, value4);

    console.log("Los datos se han agregado correctamente" + value1 + value2 + value3 + value4);


    const prueba = value1 + ", " + value2 + ", " +  value3 + ", " + value4;
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = prueba;
    document.getElementById("lista").appendChild(nuevoElemento)

    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
});




//Ciclo para imprimir todos los libros en nuestra librería.
for(i in myLibrary){
    console.log(myLibrary[i].info());
}


//Aquí estamos probando el agregar texto a un html, de esta forma agregamos texto plano a nuestro elemento que estemos
//seleccionando por el ID, solo se puede hacer una vez por elemento o se sobreescribe
//const datos = "Hola mundo cruel.";
//document.getElementById("cuadro").innerHTML = datos;


//con esta forma lo que hacemos es que agregamos un nuevo elemento al objeto que estemos seleccionando, en este caso por ID.
//createElement nos deja seleccionar que tipo de elemento queremos agregar.
//const prueba = "Mensaje de prueba putos";
//const nuevoElemento = document.createElement("p");
//nuevoElemento.textContent = prueba;

//document.getElementById("cuadro").appendChild(nuevoElemento)

//aquí lo que hacemos es que creamos un string que contiene elementos html, por lo que deduzco que se pueden introducir así directamente.
//al crear esta variable creamos un ciclo en el que recorremos a todos los elementos de la biblioteca y a cada libro lo hacemos un
//elemento único de li, así hasta recorrer todos los elementos del ciclo. y al final agregamos en forma de string la forma de cerrar 
//nuestra ul. Agregamos al html con el getByElementID y se imprimen en forma de lista nuestro elementos en la biblioteca.
