//Haz tú validación en javascript acá
$(document).ready(function() {
    
    $("#form_contacto").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.closest(".form__group").find(".error-message"));
        },
        rules: {
            nombre : {
                required: true,
                maxlength: 50 
            },
            email : {
                required: true,
                email: true
            },
            asunto : {
                required: true,
                maxlength: 50 
            },
            mensaje : {
                required: true,
                maxlength: 300 
            }
        }, //End rules

        messages : {
            nombre: {
                required: "El nombre es requerido",
                maxlength: "Su nombre no debe sobrepasar los 50 caraceres"
            },
            email : {
                required: "El email es requerido",
                email: "El correo electrónico esta mal estructurado (example@domain.com)"
            },
            asunto: {
                required: "El asunto es requerido",
                maxlength: "El asunto no debe sobrepasar los 50 caraceres"
            },
            mensaje: {
                required: "El mensaje es requerido",
                maxlength: "El mensaje no debe sobrepasar los 300 caraceres"
            },
        },
    });
});