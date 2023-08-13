//Função sem parâmetro

function retorna_versao (){
    return 1.1;
}

let versao = retorna_versao();

console.log(versao);7

//Função com parâmetro

function retorna_status_alunos (nota_1, nota_2){

    let media = (nota_1 + nota_2) / 2;
    let status;

    if (media >= 6){
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    return status;
}

let status_aluno_1 = retorna_status_alunos(7, 8);
console.log("Aluno 1: "+ status_aluno_1);

let status_aluno_2 = retorna_status_alunos(4, 6);
console.log("Aluno 2: "+ status_aluno_2); 

//Arrow Functions
//Código de uma arrow function que possui uma ou mais linhas de código.

const retorna_media = (nota_1, nota_2) => {

    let media = (nota_1 + nota_2) / 2;
    return media;

}

let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);

/*Código de uma arrow function só possui uma linha de código.

const retorna_media = (nota_1, nota_2) => (nota_1 + nota_2) / 2;

let media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);
