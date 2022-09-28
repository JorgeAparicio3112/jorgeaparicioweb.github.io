window.addEventListener("load",function(){

    formulario=this.document.getElementById("formulario");

    formulario.addEventListener("submit",function (){
        event.preventDefult();
        nombre = document.getElementById("nombre").value;
        let pass = document.getElementById(pwd).value;


        //alert("el nombre es" + nombre + "con contraseña" + pass);

        let respuesta = document.getElementById("result");

        if (nombre == "g7s21" && pass =="si se puede"){
            respuesta.innerText="si se acepto todo";
            respuesta.style.color="blue";
            respuesta.style.fontSize="3em";
            respuesta.style.width="500px";
            respuesta.style.height="80px";
            respuesta.style.backgroundColor="cyan";

        }else{
             respuesta.innerText="Si xd xdxddddd";
             respuesta.style.color="red";
             respuesta.style.fontSize="3em";
             respuesta.style.width="500px";
             respuesta.style.height="80px";
             respuesta.style.backgroundColor="cyan";


             
             }

            });
});