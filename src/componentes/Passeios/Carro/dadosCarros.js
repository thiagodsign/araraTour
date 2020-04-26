import caminito from "../../../imagens/caminito.jpg";
import florMetalica from "../../../imagens/flor-metalica.jpg";
import zoo from "../../../imagens/zoo.jpg";
import museo from "../../../imagens/museo.jpg";

let pacotesCarro = [
  {
    id: 1,
    nome: "Caminito ",
    imagem: caminito,
    descricao: 'City tour basico',
    duracao: '3h de duração',
    info:
      `Nesta categoria nos realizamos todos os mesmos trajetos realizados pelas empresas de turismo da cidade feitos em van/ônibus, com a vantagem de deixar de volta no hotel, CARRO PARTICULAR e com a duração de 3h00 passando por 10 pontos turísticos e apenas 3 paradas (boca, caminito e casa rosada). Pagamento após termino do passeio.`,
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
    nome: "Flor metalica ",
    imagem: florMetalica,
    descricao: 'Clientes Arara Turismo',
    duracao: '24h',
    info:
      ``,
    valores: [
      {
        id: 2,
        preco: 'R$ 150 /pessoa',
      },
      {
        id: 3,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 4,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 5,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 6,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 7,
        preco: 'Entrar em contato',
      }
    ]
  },
  {
    id: 3,
    nome: "Zoo de Lujan",
    imagem: zoo,
    descricao: 'City tour Premium (SELFIE TOUR)',
    duracao: '5h de duração',
    info:
      `Passeio em zoo de Lujan que fica a 1h20 min de Buenos Aires onde conhecera seu método único e inovador você se aproxima de animais selvagens como tigres, leões, elefantes e muitos outros você pode toca-los. Sua criação e diferenciada pois desde pequenos convivem com humanos e animais domésticos. (Feito todos dias da semana. Passeio não cancelado em dias de chuva. Voucher eletrónico após confirmação de pagamento. (retorno deixa em santelmo ou porto madero).`,
    valores: [
      {
        id: 1,
        preco: 'R$ 195 /pessoa',
      },
      {
        id: 2,
        preco: 'R$ 190 /pessoa',
      },
      {
        id: 3,
        preco: 'R$ 190 /pessoa',
      },
      {
        id: 4,
        preco: 'R$ 190 /pessoa',
      },
      {
        id: 5,
        preco: 'R$ 190 /pessoa',
      },
      {
        id: 6,
        preco: 'Entrar em contato',
      }
    ]
  },
  {
    id: 4,
    nome: "Museo de artes de Tigre",
    imagem: museo,
    descricao: 'Cidade de Delta do Tigre',
    duracao: '5h de duração',
    info:
      `Diferente de tudo que você já viu, uma pequena
      cidade tem sido cada vez mais visitada por viajantes
      que escolhem a capital portenha como destino. Está
      localizada no delta do rio Paraná, o quinto maior
      delta do mundo, a beleza é tão grande que alguns
      portenhos chamam de Veneza Argentina.
      Paradas para fotos em museu náutico, museu de
      artes, porto de frutos, estação de tigre, chinaTown,
      casino Trilenium e passeio de catamarã. (valor
      catamarã incluso no passeio ).
      (Feito todos dias da semana. Passeio não cancelado
      em dias de chuva.
      Voucher eletrónico após confirmação de
      pagamento.
      (retorno deixa em santelmo ou porto madero).`,
    valores: [
      {
        id: 1,
        preco: 'R$ 120 /pessoa',
      },
      {
        id: 2,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 3,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 4,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 5,
        preco: 'R$ 115 /pessoa',
      },
      {
        id: 6,
        preco: 'Entrar em contato',
      }
    ]
  },
];

export default pacotesCarro;
