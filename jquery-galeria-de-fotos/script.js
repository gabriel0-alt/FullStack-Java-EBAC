$(document).ready(function(){

        $('header button').click(function(){
            $('form').slideDown();
        })

        $('#botao-cancelar').click(function(){
            $('form').slideUp();
        })
            $('form').on('submit', function(e){
                console.log("submit");
                e.preventDefault();     
                const enderecoImagem = $('#enderecoImagemNova').val();
                console.log(enderecoImagem);
                const novoItem = $('<li></li>');
                $(`<img src="${enderecoImagem}"/>`).appendTo(novoItem);
                $(`<div class="overlay-imagem-link">
                    <a href="${enderecoImagem}" title="Ver imagem em tamanho real" target="_blank"> Ver imagem em tamanho real </a>
                    </div>`).appendTo(novoItem);
                    $(novoItem).hide('ul');
            $(novoItem).appendTo('ul');
            $('#enderecoImagemNova').val('');
                    $(novoItem).fadeIn(1500);
            })
})

