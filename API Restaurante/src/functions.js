function exibirPratos() {
    fetch("http://localhost:3333/pratos")
        .then(response => response.json())
        .then(pratos => {
            let divHTML = document.getElementById("cards")
            divHTML.innerHTML = ""; // Limpa o conteúdo existente antes de adicionar novos pratos

            pratos.forEach(prato => {
                const cardPrato = document.createElement('div')
                cardPrato.classList.add('card')

                cardPrato.innerHTML = `
                    <h3>${prato.prato}</h3>
                    <h5>${prato.descricao}</h5>
                    <h4>Preço: R$${prato.valor}</h4>
                `;

                divHTML.appendChild(cardPrato)
            });
        })
        .catch(error => {
            console.error('Erro ao exibir cardápio', error)
        });
}

function novoPrato() {
    location.href = "./forms.html"
}

function formPrato() {
    const id = document.getElementById("id").value
    const prato = document.getElementById("prato").value
    const descricao = document.getElementById("descricao").value
    const valor = document.getElementById("valor").value

    const pratoData = {
        id,
        prato,
        descricao,
        valor
    };

    fetch('http://localhost:3333/pratos/novoprato', {
        method: 'POST',
        headers: { //Cabeçalho da requisição
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pratoData), //Conversão da variável para JSON
    })
    .catch(error => {
        console.error('Erro ao cadastrar prato:', error)
    });
}

exibirPratos();
