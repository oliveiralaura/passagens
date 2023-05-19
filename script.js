var readline= require('readline-sync');
var ticket = false
var nome = 0
var sobrenome = 0
var idade = 0
// console.log(ticket)

do{
            console.log("##-- Menu --##\n");
            console.log("|-------------------------------|");
            console.log("| Opção 1 - Comprar passagem    |");
            console.log("| Opção 2 - Consultar voos      |");
            console.log("| Opção 3 - Mapa de assentos    |");
            console.log("| Opção 4 - Emitir ticket       |");
            console.log("| Opção 0 - Encerrar o programa |");
            console.log("|-------------------------------|");
            var resposta = (readline.question("Digite uma opcao: "));

 switch(resposta){
    case resposta="1":
        console.log("Você está em --> Comprar passagem");
        nome = (readline.question("Nome: "))
        sobrenome  = (readline.question("Sobrenome: "))
        idade  = (readline.question("Idade: "));
        if(idade<18){
            console.log("Venda proibida para menores de 18 anos")
           
        }
        
        var assento = (readline.question("Assento(A1 - A12;B1 - B12): "))
        var assentoValido = false
            while(assentoValido == false){
            for(let index = 1; index < 13; index ++){
                if(assento == "A" + index || assento == "B" + index){
                    assentoValido = true
                }
            }
                if(assentoValido == false){
                    console.log("| Você digitou errado")
                    assento = readline.question("|  Assento: ")
                }
            }

        var origem = (readline.question("Origem: "))
        var origemValido = false
        while(origemValido == false){
                if(origem == "Presidente Prudente" || origem == "Guarulhos" || origem == "Miami"){
                    origemValido = true
                }
            
                if(origemValido == false){
                    console.log("| Você digitou errado")
                    origem = readline.question("|  Origem: ")
                }
            }
    
            var destino = (readline.question("Destino: "))
            var destinoValido = false
            while(destinoValido == false){
                    if(destino == "Campinas" || destino == "Guarulhos" || destino == "Miami" || destino == "Porto Seguro" || destino == "Londres"){
                        destinoValido = true
                    }
                
                    if(destinoValido == false){
                        console.log("Você digitou errado")
                        destino = readline.question("Destino: ")
                    }
                }
            console.log("\n-------------Você está em --> Comprar passagem-------------\n");
            console.log("Resumo da compra");
            console.log("Cliente: "+nome+" "+sobrenome);
            console.log("Idade: "+idade);
            console.log("Assento: "+assento);
            console.log("Voo: "+origem+ " x "+destino);
            console.log("Status do voo: Confirmado\n");
            console.log("Valor: R$1500");
            ticket = true 
           
            
            var continua = (readline.question("Pressione a tecla enter para continuar"))
           
break;
        
    case resposta="2":
            console.log("+----------------- Passagens Aéreas -----------------+")
            console.log("|            Você está em -> Consulta de Voos        |")
            console.log("|  Origem                 X                 Destino  |")
            console.log("| Presidente Prudente     -              Campinas    |");
            console.log("| Presidente Prudente     -              Guarulhos   |");
            console.log("| Guarulhos               -              Miami       |");
            console.log("| Guarulhos               -              Porto Seguro|");
            console.log("| Miami                   -              Londres     |");
            console.log("|----------------------------------------------------|");
            var continua = (readline.question("Pressione a tecla enter para continuar"))
        break;
 
    case resposta="3":
        var assentoA = ""
        var assentoB = ""
        var validaAssento = false

        console.log("+----------------- Passagens Aéreas -----------------+")
        console.log("|           Você está em -> Mapa de assentos         |")
        console.log("+____________________________________________________+")

        for(var poltrona = 1;poltrona < 13; poltrona ++){

            var assentoDaVezA = "A"+poltrona
            var assentoDaVezB = "B"+poltrona
 
            if(assentoDaVezA == assento){
                assentoA += " X "
                assentoB += assentoDaVezB + " "
            }
            else if(assentoDaVezB == assento){
                 assentoB += " X "
                 assentoA += assentoDaVezA + " "
            }
            else{
                 assentoA += assentoDaVezA + " "
                 assentoB += assentoDaVezB + " "
            }
         }     
         console.log(assentoA)
         console.log(assentoB)
       
         console.log("+--------------------------------+")
 
        
        var continua = (readline.question("Pressione a tecla enter para continuar"))
    break;

    case resposta="4":
        if(ticket == true){
            console.log("+----------------- Passagens Aéreas -----------------+")
            console.log("|  Você está em -> Emitir Tickets                    |")
            console.log("                                                      ")
            console.log("Obrigado por viajar conosco!"+"                       ")
            console.log("Cliente:" +nome+" "+sobrenome+"                       ")
            console.log("Idade: "+idade+"      Assento: "+assento+"            ")
            console.log("Origem/Destino: "+origem+" > "+destino+"                 ")
            console.log("Status do voo: Confirmado"+"                          ")
            console.log("                                                      ")
            console.log("******************************************************")
        }
        else{
            console.log("Efetue a compra primeiro")
        }
    break;

    case resposta="0":
        
        console.log("Programa encerrado")
    break;
    var continua = (readline.question("Pressione a tecla enter para continuar"))
}
} while(resposta != 0)           

/* 
var assentoA = ""
        var assentoB = ""
        var validaAssento = false

        console.log('')
        console.log('+--------Passagens aérias--------+')
        console.log("você esta em --> Mapa de Assentos")
        console.log("--------------------------------")
        for(var poltrona = 1;poltrona < 13; poltrona ++){

           var assentoDaVezA = "A"+poltrona
           var assentoDaVezB = "B"+poltrona

           if( assentoDaVezA == assento){
                assentoA += " X "
                assentoB += assentoDaVezB + " "
           }
           else if(assentoDaVezB == assento){
                assentoB += " X "
                assentoA += assentoDaVezA + " "
           }
           else{
                assentoA += assentoDaVezA + " "
                assentoB += assentoDaVezB + " "
           }
        }     
        console.log(assentoA)
        console.log(assentoB)
      
        console.log("+--------------------------------+")

        console.log("|       A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12       |")
        console.log("|       B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12       |")
        console.log("+----------------------------------------------------+")*/