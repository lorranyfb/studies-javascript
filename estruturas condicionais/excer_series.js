var programacao_series = [
    {nome: "Wandinha", horario: "10h", sinopse: "A primogênita da família Addams chega à Netflix como protagonista nessa série que tem a assinatura do célebre cineasta Tim Burton."},
    {nome: "Vikings Valhalla", horario: "12h", sinopse: "Essa é uma continuação da série original Vikings, se passando um século depois da primeira história."},
    {nome: "1899", horario: "15h", sinopse:"A narrativa se passa em 1899, como o nome já diz, e tem como cenário o navio Kerberos. As personagens são os tripulantes dessa embarcação, pessoas de vários lugares do mundo que buscam oportunidades em Nova Iorque."},
    {nome:"Peaky Blinders", horario: "17h", sinopse: "Thomas Shelby é o líder da gangue Peaky Blinders, que comanda a cidade de Birmingham, na Inglaterra, no início do século XX. Ele e seus irmãos estiveram na Primeira Guerra Mundial e, ao retornar, sua maior ambição é se tornar ainda mais poderoso."},
    {nome: "Ozark", horario: "19h", sinopse: "Drama, suspense e crime estão presentes nessa brilhante série criada por Bill Dubuque e Mark Williams." },
    {nome: "The Crown", horario: "20h", sinopse: "A série biográfica histórica se passa durante o reinado da Rainha Elizabeth II e mostra os bastidores da corte: as traições, os romances, as rivalidades, as vinganças, os desafios políticos."}
];

var data_atual = new Date();
var dia_semana = data_atual.getDay();
var serie_do_dia = programacao_series[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);