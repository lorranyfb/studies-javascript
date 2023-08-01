var funcionarios = [
    "Ana",
    "João",
    "Maria",
    "Eduardo",
    "Lucas",
    "Marilia",
    "Anderson"
];

console.log(funcionarios);

var novosFuncionarios = [
    "Beatriz",
    "Levi"
];

console.log(novosFuncionarios);

funcionarios[0] = novosFuncionarios[0];
funcionarios[6] = novosFuncionarios[1];

console.log(funcionarios);

// alterar um elemento de um array