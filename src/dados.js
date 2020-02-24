import eddie_the_eagle from "./imagens/eddie_the_eagle.jpg";
import emperors_new_groove from "./imagens/emperors_new_groove.jpg";
import law_abiding_citizen from "./imagens/law_abiding_citizen.jpg";
import lucky_number_slevin from "./imagens/lucky_number_slevin.jpg";
import stonehearst_asylum from "./imagens/stonehearst_asylum.jpg";
import way_back from "./imagens/way_back.jpg";
import caminito from "./imagens/caminito.jpg";

let pacotes = [
  {
    id: 1,
    nome: "Caminito ",
    imagem: caminito,
    descricao: 'City tour basico',
    duracao: '3h de duração',
    info:
      `Nesta categoria realizamos todos os mesmos trajetos realizados pelas empresas de turismo da cidade feitos em van/ônibus, e com a duração de 3h00 passando por 10 pontos turísticos e apenas 3 paradas (boca, caminito e casa rosada). Voucher eletrónico após confirmação de pagamento.`,
    valores: [
      {
        id: 1,
        preco: 80,
      },
      {
        id: 2,
        preco: 75,
      },
      {
        id: 3,
        preco: 75,
      }
    ]
  }
];

export default pacotes;
