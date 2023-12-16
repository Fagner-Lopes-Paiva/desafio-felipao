function partida (vitoria, derrota) {

    let viroriasEDerrotas = vitoria - derrota;
    let nivel = '';
    
    for (let i = 0; i <= viroriasEDerrotas; i++) {
        console.log(i);
        
        if ( i <= 10) {
            nivel = 'Ferro';
        }else if ( i >= 11 && i <= 20) {
            nivel = 'Bronze';
        }else if ( i >= 21 && i <= 50) {
            nivel = 'Prata';
        }else if (i >= 51 && i <= 80) {
            nivel = 'Ouro';
        }else if (i >= 81 && i <= 90) {
            nivel = 'Diamante';
        }else if (i >= 91 && i <= 100) {
            nivel = 'Lendaria';
        }else if (i >= 101) {
            nivel = 'Imotal';
        }
    }
    
    let resultado = `O Herói tem de saldo de ${viroriasEDerrotas} está no nível de ${nivel}`
    
    return resultado
    
}

console.log(partida(90, 5));