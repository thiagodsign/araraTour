import passaporte from "../../imagens/transfer-passaport.png";
import aviao from "../../imagens/transfer-aviao.png";

export let pacotesTransfer = [
  {
    id: 1,
    nome: "Clientes Arara Turismo",
    imagem: passaporte,
    duracao: '24h',
    info:
      ``,
    valores: [
      {
        id: 1,
        preco: 'A partir de R$80',
      }
    ]
  },

  {
    id: 2,
    nome: "Apenas Transfer ",
    imagem: aviao,
    descricao: 'City tour basico',
    info:
      ``,
    valores: [
      {
        id: 1,
        preco: 'A partir de R$100',
      }
    ]
  },
];

export let pessoas = [
  {
    id: 1,
    quantidade: "1 pessoa",
    valor: "R$80/Pessoas",
  },
  {
    id: 2,
    quantidade: "2 pessoas",
    valor: "R$80/Pessoas",
  },
  {
    id: 3,
    quantidade: "3 pessoas",
    valor: "R$80/Pessoas",
  },
  {
    id: 4,
    quantidade: "4 pessoas",
    valor: "R$80/Pessoas",
  },
  {
    id: 5,
    quantidade: "5 pessoas",
    valor: "R$80/Pessoas",
  },
  {
    id: 6,
    quantidade: "Acima de 7",
    valor: "A combinar",
  },
]
