
$(document).ready(function() {
    
    $('#cpf').mask('999.999.999-99')

    $('#telefone').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: false,
            },
            cep: {
                required: false,
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})