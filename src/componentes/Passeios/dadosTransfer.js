import passaporte from "../../imagens/transfer-passaport.jpg";

let pacotesCarro = [
  {
    id: 1,
    nome: "Clientes Arara Turismo",
    imagem: passaporte,
    duracao: '24h',
    info:
      ``,
    valores: [
      {
        id: 2,
        preco: 'R$ 120 /pessoa',
      },
      {
        id: 3,
        preco: 'R$ 100 /pessoa',
      },
      {
        id: 4,
        preco: 'R$ 90 /pessoa',
      }
    ]
  },
  {
    id: 2,
    nome: "Caminito ",
    imagem: passaporte,
    descricao: 'City tour basico',
    duracao: '3h de duração',
    info:
      ``,
    valores: [
      {
        id: 2,
        preco: 'R$ 120 /pessoa',
      },
      {
        id: 3,
        preco: 'R$ 100 /pessoa',
      },
      {
        id: 4,
        preco: 'R$ 90 /pessoa',
      }
    ]
  },
];

export default pacotesCarro;
