function resultadoPartidas() {
    let vitorias = 158;
    let derrotas = 5;
    let resultado = vitorias - derrotas;
    console.log(resultado);
    let rank
    if (resultado < 11) {
        rank = "Ferro";
    } else if (resultado < 21) {
        rank = "Bronze";
    } else if (resultado < 51) {
        rank = "Prata";
    } else if (resultado < 81) {
        rank = "Ouro";
    } else if (resultado < 91) {
        rank = "Diamante";
    } else if (resultado < 101) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    console.log(`O Herói tem de saldo ${resultado} está no nível de ${rank}.`);
}



resultadoPartidas();