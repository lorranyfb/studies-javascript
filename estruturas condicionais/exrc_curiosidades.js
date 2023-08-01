var curiosidade = [
    {titulo: "Músculo", conteudo: "Em relação ao tamanho, o músculo mais forte do corpo é a língua."},
    {titulo: "Célula", conteudo: "A maior célula do corpo humano é o óvulo feminino e o menor é o espermatozoide masculino."},
    {titulo: "Órgão", conteudo: "O maior órgão interno é o intestino delgado."},
    {titulo: "Cérebro", conteudo: "O cérebro é muito mais ativo à noite do que durante o dia."},
    {titulo: "Saliva", conteudo: "Durante a sua vida, você produzirá saliva suficiente para encher duas piscinas olímpicas."},
    {titulo: "Coração", conteudo: "O coração das mulheres bate mais rápido que o dos homens."},
    {titulo: "Olhos", conteudo: "Seus olhos são sempre do mesmo tamanho desde o nascimento até a morte, mas o nariz e as orelhas nunca param de crescer."},
    {titulo: "Sexo", conteudo: "Em qualquer dia, a relação sexual acontece cerca de 120 milhões de vezes na terra."},
    {titulo: "Espirros", conteudo: "Espirros regularmente exceder 100 mph e impulsos nervosos de e para o cérebro viajam tão rápido quanto 170 quilômetros por hora."},
    {titulo: "Osso", conteudo: "O osso hióide é o único osso do corpo humano não conectado a outro osso."}
];

var tamanho_colecao = curiosidade.length;
var numero_sorteado = Math.floor(Math.random()*tamanho_colecao);
var curiosidade_escolhida = curiosidade[numero_sorteado];
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE BIOLÓGICA");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);