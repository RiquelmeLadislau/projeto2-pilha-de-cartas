const card = []
let menu = ``
let newCard = ``
let removeCard = ``

do {
    menu = prompt(`Numeros de cartas: ${card.length}
        
        
    1- Adicionar carta
    2- Remover carta
    3- Sair`)



    switch(menu){
        case '1':
            newCard = prompt(`Qual o nome da carta a ser adicionado?`)
            card.unshift(newCard)
            break
        case '2'
        if (card.length === 0) {
            alert('Impossível retirar carta que não existe.')
        } else {
            removeCard = card.shift()
            alert(removeCard) 
        }
        break
    case '3':
        alert('Encerrando programa...')
        break
    default:
        alert('Opção inválida.')  
        }
    }while(menu !== '3')