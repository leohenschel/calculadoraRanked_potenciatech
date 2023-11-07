function matchsCount(countWin, countLoss) {
    let balanceMatch = countWin - countLoss; // balanceMatch recebe o valor de countWin e countLoss e subtrair
    let rankedLvl = "";

    //estrutura para alterar o rank conforme as vitorias e derrotas informadas
    if (balanceMatch < 10) {
        rankedLvl = "Ferro";
    } else if (balanceMatch >= 11 && balanceMatch <= 20) {
        rankedLvl = "Bronze";
    } else if (balanceMatch >= 21 && balanceMatch <= 50) {
        rankedLvl = "Prata";
    } else if (balanceMatch >= 51 && balanceMatch <= 80) {
        rankedLvl = "Ouro";
    } else if (balanceMatch >= 81 && balanceMatch <= 90) {
        rankedLvl = "Diamante";
    } else if (balanceMatch >= 91 && balanceMatch <= 100) {
        rankedLvl = "Lendário";
    } else if (balanceMatch >= 101) {
        rankedLvl = "Imortal";
    }

    return (`O Herói tem um saldo de ** ${balanceMatch} ** Partidas, e está no nível ${rankedLvl}`);
}

//alterar os valores para verificar o rank
let countWin = 80;
let countLoss = 10;
let rankedStatus = matchsCount(countWin, countLoss); // variavel rankedStatus que recebe a função matchsCount e verifica as condições
console.log(rankedStatus);





