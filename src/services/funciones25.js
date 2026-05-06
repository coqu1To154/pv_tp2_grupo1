export const cambiarColor = () => {
    const boton = document.querySelector('#color');

    //capturamos el evento click
    boton.addEventListener('click', () =>{

        document.body.classList.toggle('fondo_nuevo');
         console.log('El color se cambio con exito');
    });
   
};