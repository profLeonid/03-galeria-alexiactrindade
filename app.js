'use strict'

const pokemons = [
    { imagem: './img/imagem1.png', nome: 'Starwie' },
    { imagem: './img/imagem2.jpeg', nome: 'Togepi' },
    { imagem: './img/imagem3.jpeg', nome: 'Dito' },
    { imagem: './img/imagem4.jpeg', nome: 'Pikachu' },
    { imagem: './img/imagem5.jpg', nome: 'Charmander' },
    { imagem: './img/imagem6.jpg', nome: 'Snorlax' }
]


function criarImagem (pokemon) {
    const galeria = document.getElementById('galeria')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.src = pokemon.imagem

    const figCaption = document.createElement('figcaption')
    figCaption.textContent = pokemon.nome

    figure.appendChild(img)
    figure.appendChild(figCaption)
    galeria.appendChild(figure)
}

pokemons.forEach(criarImagem)


