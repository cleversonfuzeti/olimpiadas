function pesquisar ( ) {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(section)
    
    let resultados= ""
    
    for (let dado of dados) {
    resultados += `
    <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
               <a href="https://pt.wikipedia.org/wiki/Rebeca_Andrade" target="_blank">Mais informações</a>000
            </div>
    
            `
    }
    
    section.innerHTML = resultados

}


