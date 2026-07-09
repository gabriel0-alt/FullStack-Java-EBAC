        $(document).ready(function () {
            $('#carousel-imagens').slick({
                autoplay: true,
                arrows: false
            });
        


$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '01234-567'
})

$('form').validate({
    rules: {
        nome: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true,
            minlength : 10
        },
        telefone: {
            required: true,
            minlength: 15
        },
        endereco: {
            required: true,
            minlength: 9
        },
        cep: {
            required: true,
            minlength: 8
        },
        cpf: {
            required: true,
            minlength: 14
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})
        });