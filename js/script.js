document.addEventListener('DOMContentLoaded', () => {

    //opções de cartão
    const cardArray = [
        {
            name: 'css3',
            img: './img/harry.jpg'
        },
        {
            name: 'figma',
            img: './img/oculos.PNG'
        },
        {
            name: 'git',
            img: './img/preto.PNG'
        },
        {
            name: 'github',
            img: './img/vermelho.PNG'
        },
        {
            name: 'html5',
            img: './img/colorido.PNG'
        },
        {
            name: 'javascript',
            img: './img/leao.PNG'
        },
        {
            name: 'css3',
            img: './img/harry.jpg'
        },
        {
            name: 'figma',
            img: './img/oculos.PNG'
        },
        {
            name: 'git',
            img: './img/preto.PNG'
        },
        {
            name: 'github',
            img: './img/vermelho.PNG'
        },
        {
            name: 'html5',
            img: './img/colorido.PNG'
        },
        {
            name: 'javascript',
            img: './img/leao.PNG'
        },
    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#acertos')
    const errorDisplay = document.querySelector('#erros')
    const errorTitle = document.querySelector('#erro')
    const acertoTitle = document.querySelector('#acerto')
    const fim = document.querySelector('#fim')

    let erro = 0;
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //crie seu quadro
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', './img/quadradoroxo.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //vire seu cartão
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    //verifique se há correspondencias
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './img/quadradoroxo.png')
            cards[optionTwoId].setAttribute('src', './img/quadradoroxo.png')
            alert('Você clicou na mesma imagem!')
            erro++
            errorDisplay.textContent = " " + erro
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('Você encontrou!')
            cards[optionOneId].setAttribute('src', './img/white.png')
            cards[optionTwoId].setAttribute('src', './img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', './img/quadradoroxo.png')
            cards[optionTwoId].setAttribute('src', './img/quadradoroxo.png')
            alert('Desculpe, tente novamente!')
            erro++
            errorDisplay.textContent = " " + erro
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = " " + cardsWon.length

        if (cardsWon.length === cardArray.length / 2) {
            errorTitle.style.display = "none"
            acertoTitle.style.display = "none"
            fim.textContent = '✨ Parabéns! Você encontrou todas as cartas!';
            jogarNovamente.style.display = "inline-block";
        }
    }

    createBoard()

    // ===== 🔹 ADIÇÃO: botão "Jogar Novamente" =====
    const jogarNovamente = document.getElementById('jogar-novamente');

    if (jogarNovamente) {
        jogarNovamente.addEventListener('click', () => {
            location.reload(); // recarrega a página ao clicar
        });
    }

})
