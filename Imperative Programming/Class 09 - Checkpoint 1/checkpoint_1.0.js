/*Desenvolver um menu para um microondas super veloz, 
onde teremos 5 opções de comida com seus respectivos 
tempos pré-definidos. 
    1 - Pipoca – 10 segundos (padrão);
    2 - Macarrão – 8 segundos (padrão);
    3 - Carne – 15 segundos (padrão);
    4 - Feijão – 12 segundos (padrão);
    5 - Brigadeiro – 8 segundos (padrão); 
=============================================
Features
    - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
    - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
    - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
    - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
    - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
    - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/
let pipoca = 30;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function alterarTempo(t){
    this.tempo = t;
    console.log(this.tempo)
}
function menu(opcao){
    switch (opcao){
//pipoca = 10
        case 1:
            if (pipoca < 10){
                console.log("tempo insuficiente");
            }
            else if(pipoca > 20 && pipoca < 30){
                console.log("A Comida Queimou :(");
            }
            else if(pipoca >= 30){
                console.log("KABUMM!");
            }
            else {
                console.log("Prato pronto, bom apetite! :p");
            }
        break;
//macarrao = 8
        case 2:
            if (macarrao < 8){
                console.log("tempo insuficiente");
            }
            else if(macarrao > 16 && macarrao < 24){
                console.log("A Comida Queimou :(");
            }
            else if(macarrao >= 24){
                console.log("KABUMM!");
            }
            else {
                console.log("Prato pronto, bom apetite! :p");
            }
        break;
//carne = 15min
        case 3:
            if (carne < 15){
                console.log("tempo insuficiente");
            }
            else if(carne > 30 && carne < 45){
                console.log("A Comida Queimou :(");
            }
            else if(carne >= 45){
                console.log("KABUMM!");
            }
            else {
                console.log("Prato pronto, bom apetite! :p");
            }
        break;
//feijao = 12
        case 4:
            if (feijao < 15){
                console.log("tempo insuficiente");
            }
            else if(feijao > 30 && feijao < 45){
                console.log("A Comida Queimou :(");
            }
            else if(feijao >= 45){
                console.log("KABUMM!");
            }
            else {
                console.log("Prato pronto, bom apetite! :p");
            }
        break;
//brigadeiro = 8min
        case 4:
            if (brigadeiro < 8){
                console.log("tempo insuficiente");
            }
            else if(brigadeiro > 16 && brigadeiro < 24){
                console.log("A Comida Queimou :(");
            }
            else if(brigadeiro >= 45){
                console.log("KABUMM!");
            }
            else {
                console.log("Prato pronto, bom apetite! :p");
            }
        break;
    }
}

menu(1);