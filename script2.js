var readline = require('readline-sync');

console.clear();
do {
    
    resp = (readline.question("Opção: "));
    resp = parseInt(resp);

    switch(resp) {
        case 1:
            console.clear();
            console.log("Escolheu 1");
            break;
        case 2:
            console.clear();
            console.log("Escolheu 2");
            break;
        case 3:
            console.clear()
            console.log("Escolheu 3")
            break;
        case 4:
            console.clear();
            console.log("Escolheu 4")
            break;
        default:
            console.log("Escolhe direito")
            break;
    }

} while (resp != 0);



