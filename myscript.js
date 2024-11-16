
const myLibrary = [];

function Book(title, author, read){
    //Este sería nuestro constructor para nuestro objeto de tipo libro
	this.title = title;
	this.author = author;
	this.read = read;
	this.info = function(){
		return this.title + ", " + this.author + ", " + this.read + "."
    }
}

function addToLibrary(title, author, read){
    //Esta función lo que hace es a partir de los parametros crear un objeto de tipo Book y agregarlo a nuestra lista
    //en la que se almacenarán todos los libros, esta lista es myLibrary.
    const book = new Book(title, author, read);
    myLibrary.push(book);
}


function deleteBook(index){
    //usamos la función splice para borrar un elemento del arreglo, splice funciona con 2 parametros, el primero es el indice y el segundo es
    //Cuantos elementos vamos a eliminar a partir del indice que le indicamos.
    myLibrary.splice(index, 1);
    
}


function displayLibrary(){
    //Creamos un loop que itera sobre nuestra lista de libros y crea un elemento con los datos de nuestro libro.
    myLibrary.forEach(elemento =>{


        //Aquí creamos un nuevo elemento de tipo div, que es el que almacenará los datos de nuestro libro.
        const divOfBook = document.createElement("div");

        //A nuestro libro le agregaremos la clase de tipo libro, para darle estilo posteriormente con CSS
        divOfBook.classList.add("libro");

        //Aquí agregamos que es lo que habrá dentro de nuestro div.
        divOfBook.textContent =`${elemento.title} ${elemento.author} ${elemento.read} Botón de borrar aquí`;
        const contenedor = document.getElementById("lista");
        contenedor.appendChild(divOfBook)
        
    });


}

//Libros default.
addToLibrary("Lord of the rings", "Tolkien", "Leído");
addToLibrary("Hábitos atómicos", "James Clear", "Leído");
displayLibrary();

/*
    Creamos una variable y le asignamos el valor introducido dentro del documento.
    Mas adelante lo que hacemos es que agregamos un listener al botón, que al ser clickeado este realiza una funcion en la que cada 
    valor capturado se lo asignamos a una variable temoporal (creo que se puede saltar este paso y hacerlo directamente ne el constructor)
    Agregamos los valores a nuestro constructor del libro, y enviamos un mensaje solo para corroborar que las cosas se agregaron
    correctamente. 
*/
const title = document.getElementById("title");
const author = document.getElementById("author");
const select = document.getElementById("mySelect");
const button = document.getElementById("myButton");

//el botón al ser clickeado lo que hace es almacenar los datos en los inputs en variables independientes.
//Se determina que valor tiene el campo de read, y dependiendo de ello es el valor que tendrá la variable de read.
//se agrega a la libreria con la función de addToLibrary y se muestra en pantalla nuevamente los datos de los libros.
button.addEventListener("click", () =>{

    const value1 = title.value;
    const value2 = author.value;
    let value3 = select.value;

    if(value3 == "read"){
        value3 = "Leído"
    }
    else{
        value3 = "No leído"
    }

    addToLibrary(value1, value2, value3);

    const divOfBook = document.createElement("div");

    //A nuestro libro le agregaremos la clase de tipo libro, para darle estilo posteriormente con CSS
    divOfBook.classList.add("libro");

    //le agregamos el indice del libro como elemento de tipo data.
    divOfBook.dataset.id = `${myLibrary.length - 1}`;

    //Aquí agregamos que es lo que habrá dentro de nuestro div.
    divOfBook.textContent =`${value1} ${value2} ${value3} Botón de borrar aquí`;
    const contenedor = document.getElementById("lista");
    contenedor.appendChild(divOfBook)
    
    title.value = "";
    author.value = "";
   
});

//De momento "funciona" pero al imprimir los libros la lista anterior queda aún en el html, buscar forma de borrar el elemento anterior antes de imprimir el siguiente.
//reestructurar la forma en que se hace y limitarme a agregar y eliminar individualmente?
//resolver este pedo













//usamos nuestra función de crear el libro y agregarlo a la librería
//addToLibrary("Biblia", "Diosito", 134, "No leído");
//addToLibrary("Biblia 2", "Yo mero", 666, "Leído");

//Ciclo para imprimir todos los libros en nuestra librería.
//for(i in myLibrary){
//    console.log(myLibrary[i].info());
//}


/*
let listaHTML = "<ul>";

myLibrary.forEach(elemento =>{
    listaHTML += `<li>${elemento.info()}</li>`;
});

listaHTML += "</ul>";

document.getElementById("lista").innerHTML = listaHTML;
*/

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
