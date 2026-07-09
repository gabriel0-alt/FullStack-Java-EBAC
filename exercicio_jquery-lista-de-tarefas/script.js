function adicionarTarefa(){
const tarefa = $("#nomeTarefa").val();
$("#ListaTarefas ul").append(`<li class="tarefa">${tarefa}</li>`);
}

function limparTarefas(){
    $(this).remove();
}



$(document).ready(function(){
    $("#btnAdicionar").click(adicionarTarefa);
    $("#ListaTarefas ul").on("click","li", limparTarefas);
        
});
