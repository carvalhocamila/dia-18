$.support.cors = true;

$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina01.html")
    }
);

$('#btPagina1').click(
    function (){
        alert("OLÁ");
        console.log("clique do botão 1");
            $('#conteudo').load("pages/pagina01.html")
    }

)

$('#btPagina2').click(
    function (){
        alert("OLÁA");
        console.log("clique do botão 2");
            $('#conteudo').load("pages/pagina02.html")
    }
)
    