const opcoes = ["pedra", "papel", "tesoura"];

function jogar(jogador) {

    const computador = opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log(`A escolha do jogador foi: ${jogador}`);
    console.log(`A escolha da máquina foi: ${computador}`);

    if (jogador === computador) {
    document.getElementById("resultado").innerHTML =
                        `PERDEU!!!! <br>
         O computador escolheu: ${computador}<br>
         Como q vc me empata com uma maquina`;
}

else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
) {
    document.getElementById("resultado").innerHTML =
            `O omputador escolheu: ${computador}<br>
            tu ganho!`;
        
}

else {
    document.getElementById("resultado").innerHTML =
         `O computador escolheu: ${computador}<br>
         perdeu pra maquina, bizarro`;
}
};