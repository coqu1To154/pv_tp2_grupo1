

export const inicializarRegistro = () => {

    const formulario = document.querySelector('#form-carga');
    const contenedorResultado = document.querySelector('#resultado');

    //captura de datos
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const inputnombre = document.querySelector('#nombre');
        const inputapellido = document.querySelector('#apellido');
        const inputlibreta = document.querySelector('#libreta');

        const nombreVal = inputnombre.value;
        const apellidoVal = inputapellido.value;
        const luVal = inputlibreta.value;

        //creamos un nuevo elemento
        contenedorResultado.innerHTML = '';

        const fichaInfo = document.createElement('div');
        fichaInfo.className = 'info-box';

        fichaInfo.innerHTML = `
        <h3>Los Datos son: </h3>
        <p><strong>Nombre:</strong> ${nombreVal}</p>
        <p><strong>Apellido:</strong> ${apellidoVal}</p>
        <p><strong>Libreta Universitaria:</strong> ${luVal}</p>
        `;

        //agregamos el elemento al DOM
        contenedorResultado.appendChild(fichaInfo);

        formulario.reset();
    });
};