function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    // Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Campo de busca está vazio!</p>";
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Conheça suas produções aqui!</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Este não é um item válido!</p>"
    }

    

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
