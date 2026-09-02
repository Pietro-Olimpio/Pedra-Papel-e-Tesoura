# Pedra, Papel e Tesoura

Um jogo simples uzando **HTML, CSS e JavaScript**.

O jogador escolhe entre pedra, papel ou tesoura, enquanto o computador faz uma escolha aleatória. Depois, o JavaScript compara as duas escolhas e mostra o resultado na tela.

---

## Como funciona

O jogo possui três botões para o jogador escolher:

- Pedra
- apel
- Tesoura

Quando o jogador clica em uma das opções, o HTML executa a função `jogar()` do JavaScript e envia a escolha do jogador.

Exemplo:

```html
<button onclick="jogar('pedra')">Pedra</button>
```

## Regras
`Papel` ganha de pedra mas perde pra tesoura
`Pedra` ganha de tesoura mas perde pra papel
`Tesoura` Ganha de papel mas perde pra pedra

## Estrutura
```
PedraPapelTesoura
│
├── index.html
├── style.css
├── script.js
├── comandos.md
└── README.md
```

