document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.formcontato__input, .formcontato__textarea');

    /* forEach Itera sobre cada input  */
    inputs.forEach(input => {

        // Este evento se activa cada vez que se introduce o modifica el contenido del input
        input.addEventListener('input', function() {
            const label = input.nextElementSibling;
            
            // Verificamos si el input tiene contenido (usando trim() para eliminar espacios en blanco).
            //Si tiene contenido
            if (input.value.trim() !== '') {
                //mostramos el label
                label.style.display = 'block';
                
                // Verificar si el input está enfocado
                if (document.activeElement === input) {
                    label.style.color = '#2A7AE4';
                } else {
                    label.style.color = '#A2A2A2';
                }
                
            } else {
                //Si el input esta vacio lo ocultamos
                label.style.display = 'none';
            }
        });

        // Agregar un event listener para el evento focus
        // Se activa cuando el input recibe el foco
        input.addEventListener('focus', function() {
            const label = input.nextElementSibling;

            if (input.value.trim() !== '') {
                label.style.color = '#2A7AE4';
            }
        });

        // Agregar un event listener para el evento blur
        // Se activa cuando el input pierde el foco
        input.addEventListener('blur', function() {
            const label = input.nextElementSibling;

            if (input.value.trim() !== '') {
                label.style.color = '#A2A2A2';
            }
        });
    });
});
