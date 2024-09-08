function pesquisar() {

    // Exibe a barra de progresso

    const progresso = document.createElement("div");

    progresso.classList.add("barra-progresso");

    document.body.appendChild(progresso);


    // Simula um tempo de carregamento

    setTimeout(() => {

        const termoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

        const categoriaFiltro = document.getElementById("filtro-categoria").value;


        // Filtra os dados com base na pesquisa e nos filtros

        const resultados = dados.filter(dado => {

            const correspondeTermo = termoPesquisa === "" || 

                dado.titulo.toLowerCase().includes(termoPesquisa) ||

                dado.descricao.toLowerCase().includes(termoPesquisa);

            const correspondeCategoria = categoriaFiltro === "Todos" || dado.categoria === categoriaFiltro;

            return correspondeTermo && correspondeCategoria;

        });


        const htmlResultados = resultados.map(dado => 

            `<div class="item-resultado" onclick="toggleDetalhes(this)">

                <h2>

                    <a href="${dado.link}" target="_blank">${dado.titulo}</a> 

                    <span class="tags ${dado.categoria}">${dado.categoria.toUpperCase()}</span>

                </h2>

                <p class="descricao-meta">${dado.descricao}</p>

                <div class="detalhes">

                    <p><strong>Curiosidade:</strong> ${dado.curiosidade}</p>

                    <p><strong>Categoria:</strong> ${dado.categoria}</p>

                    <p><strong>Link:</strong> <a href="${dado.link}" target="_blank">${dado.link}</a></p>

                </div>

            </div>`

        ).join("");


        // Exibe os resultados ou uma mensagem se nenhum resultado for encontrado

        document.getElementById("resultados-pesquisa").innerHTML = htmlResultados || "<p>Nenhuma informação encontrada.</p>";

        

        // Remove a barra de progresso

        progresso.remove();

    }, 1000);

}


function toggleDetalhes(element) {

    element.classList.toggle("expandido");

}