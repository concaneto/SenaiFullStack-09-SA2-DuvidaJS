$( document ).ready(function() {

    // $("#carrosel img:eq(0)").addClass("banner-ativo").show()

    // setInterval(slide, 1000)

    // function slide(){
    //     if($(".banner-ativo").next().length ){
    //         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    //     }else{
    //         $(".banner-ativo").removeClass().hide()
    //         $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    //     }
    // }

    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")

    //     if ($("#menu").hasClass("menu-ativo")) {
    //         $("#menu").removeClass("menu-ativo")
    //     } else {
    //         $("#menu").addClass("menu-ativo")
    //     }
    })
    // -----------------------------------------------
    $("#btn-shuffling").click(function () {
        $("#login-box").toggleClass("login-box-shuffle")
    })

  
    
})
// $(document).ready(function(){

//     $("#barras").click(function(){
//         if ($("#menu").hasClass("#menu-ativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass("#menu-ativo")
//         }
//     })
// })

let listaNoticias = [
    {
        titulo: "Brasil leva 1 gol no início do Jogo",
        Descricao: "Houve uma falha de defesa brasileira, que deixou atacante adversário cara com o goleiro"
    },
    {
        titulo: "Dolar está alto",
        Descricao: "O dolar está realmente muito alto"
    },
    {
        titulo: "O Peso argentino ta alto",
        Descricao: "Houve uma falha de defesa brasileira, que deixou atacante adversário cara com o goleiro"
    },
    {
        xtitulo: "Brasil leva 7x1",
        Descricao: "Houve uma falha de defesa brasileira, que deixou atacante adversário cara com o goleiro"
    },
    {
        titulo: "Brasil leva 1 gol no início do Jogo",
        Descricao: "Houve uma falha de defesa brasileira, que deixou atacante adversário cara com o goleiro"
    },
    {
        titulo: "Brasil leva 1 gol no início do Jogo",
        Descricao: "Houve uma falha de defesa brasileira, que deixou atacante adversário cara com o goleiro"
    },
]

function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")

    let template = ""

    for (let index = 0; index < listaNoticias.length; index++) {
        const element = listaNoticias[index];

        template += `<div class="cardnews">
        <img src="img/Logo-branco.png" alt="Foto de um PC">
        <h3>${listaNoticias.titulo}</h3>
        <p>${listaNoticias.Descricao}</p>
    </div>`
    }

    espaco.innerHTML = template
}