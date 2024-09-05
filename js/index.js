
//iniciar sesion//

let cambiarNombre = document.querySelector("#iniciar")  //querySelector(".") o ("#") para clases o id

cambiarNombre.addEventListener("click",function(){
    this.innerText="cerrar sesión"
})


//remover//

let eliminarDef = document.getElementById("buttdef")

eliminarDef.addEventListener("click", function(){
    this.remove()
})

//alert

let gatoAtigrado = document.getElementById("gato")

gatoAtigrado.addEventListener("click",function(){
    alert("Gato Atigrado was liked")
})


let goldenAlert = document.getElementById("golden")

goldenAlert.addEventListener("click", function(){
    alert("Golden Retriever was liked")
})

//aumentar numero de likes//

let aumentarLike = document.querySelector("#gato")

aumentarLike.addEventListener("click", function(){
    let numeroOriginal = parseInt(aumentarLike.textContent);

    numeroOriginal++;

    aumentarLike.textContent = numeroOriginal + " me gusta";
})



let aumentarLikeg = document.querySelector("#golden")

aumentarLikeg.addEventListener("click", function(){
    let numeroOriginal = parseInt(aumentarLikeg.textContent);

    numeroOriginal++;

    aumentarLikeg.textContent = numeroOriginal + " me gusta";
})
