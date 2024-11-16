/**
 * Qué debemos de tener aquí?
    -Libreria principal *
    -Constructor del objeto de tipo libro*
    -Función para agregar un libro a la librería*
    -Función para desplegar la librería. *
    -Función para eliminar un libro de la librería según el índice. *
 */


const myLibrary = [];

function Libro(titulo, autor, leido){

    /**
     * Constructor del libro, solamente requerimos 3 parametros y al final agregamos una función la cual
        devuelve los datos del libro requerido.
     */
    this.titulo  = titulo;
    this.autor = autor;
    this.leido = leido;
    this.info = function(){

        return this.titulo + ", " + this.autor + ", " + this.leido;

    }
}

function agregarLibro(titulo, autor, leido){

    /**
     * función para agregar un libro a la librería con los parametros recibidos.
     */
    const libro = new Libro(titulo, autor, leido);
    myLibrary.push(libro);
}   

function eliminarLibro(index){

    /**
     * Según el indice recibido eliminamos ese elemento de la librería, al usar el método splice requerimos
        ponder el indice a eliminar y la cantidad de elementos que queremos borrar, en este caso solo 1.
     */
    myLibrary.splice(index, 1);
}




const title = document.getElementById("titulo");
const author = document.getElementById("autor");
const select = document.getElementById("select");
const button = document.getElementById("boton");



button.addEventListener("click", () =>{

    /**
     * A nuestro botón le agregamos un listener en el cual determinamos que al ser clickeado 
        los valores dentro de los inputs de nuestro html son asignados a una variable para poder
        ser manejados posteriormente y los agregamos a la librería.
     */

    const value1 = title.value;
    const value2 = author.value;
    let value3 = select.value;

    if(value3 == "leido"){
        value3 = "Leído";
    }
    else{
        value3 = "No leído";
    }

    agregarLibro(value1, value2, value3);
    desplegarLibreria();
    title.value = "";
    author.value = "";
    console.log(myLibrary)
});

function desplegarLibreria(){

    /**
     * Esta función hace referencia al elemento lista en nuestro documento que es donde se van a agregar los libros,
     * se itera sobre nuestra librería y a cada uno de los libros se le crea un div independiente para tener
     * un mejor manejo posterior. Al inicio de la función lo que hace es que limpia el div completamente para
     * que al eliminar o agregar un libro no se agregen 2 veces en bubcle.
     */

    const miElemento = document.getElementById("lista");
    miElemento.innerHTML = ""; // Elimina todo el contenido

    //documentar esta mierda
    myLibrary.forEach(elemento =>{
        
        //Aquí creamos un nuevo elemento de tipo div, que es el que almacenará los datos de nuestro libro.
        const divOfBook = document.createElement("div");

        //A nuestro libro le agregaremos la clase de tipo libro, para darle estilo posteriormente con CSS
        divOfBook.classList.add("libro");
        const datosLibro = document.createElement("p")
        //Aquí agregamos que es lo que habrá dentro de nuestro div.
        datosLibro.textContent =`${elemento.titulo} | ${elemento.autor}`;
        datosLibro.classList.add("texto-libro")
        datosLibro.classList.add("elemento-libro")
        divOfBook.appendChild(datosLibro)
        const contenedor = document.getElementById("lista");
        contenedor.appendChild(divOfBook)

        //Creamos un elemento boton y lo agregamos a nuestro div que contiene los datos del libro.
        const boton = document.createElement("button");
        boton.classList.add("boton-leido");
        boton.textContent = `${elemento.leido}`;
        boton.classList.add("elemento-libro")
        divOfBook.appendChild(boton);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        boton.classList.add("elemento-libro")
        divOfBook.append(botonEliminar);

        if(elemento.leido == "Leído"){
            boton.classList.add("leido")
        }
        else{
            boton.classList.add("no-leido")
        }

        //creamos el evento que cuando hagan click en ese botón se elimine el libro de la lista.
        botonEliminar.addEventListener("click", () =>{
            eliminarLibro(myLibrary.indexOf(elemento));
        });

        //creamos un evento que al hacer click al boton de estado de Leído, lo cambia al contrario.
        boton.addEventListener("click", () =>{
            if(elemento.leido == "Leído"){
                boton.classList.add("no-leido");
                boton.classList.remove("leido")
                elemento.leido = "No Leído"
                desplegarLibreria();
            }
            else{
                boton.classList.add("leido");
                boton.classList.remove("no-leido")
                elemento.leido = "Leído"
                desplegarLibreria();
            }
        });



        const indice = myLibrary.indexOf(elemento);
        divOfBook.dataset.id = `${indice}`;
        botonEliminar.classList.add("boton-eliminar");
    });
}

//ahora que todos los div tienen el indice del libro podemos manejar 2 funciones, una para modificar el estadus
//del libro y otro para eliminar el libro.


function eliminarLibro(index){
    myLibrary.splice(index, 1);
    desplegarLibreria();
}

//esto da un error porque lo detecta como función, ver por qué pasa esto.



//botonLeido.addEventListener("click", () => {});


agregarLibro("Lord of the rings", "Tolkien", "No leído");
agregarLibro("Hábitos atómicos", "James Clear", "No leído");
agregarLibro("Sapiens", "Yuval Noah", "Leído");
agregarLibro("Minimalismo Digital", "Cal Newport", "No leído");
agregarLibro("Concentrate", "Cal Newport", "No leído");

desplegarLibreria();