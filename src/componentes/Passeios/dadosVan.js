import caminito from "../../imagens/caminito.jpg";
import florMetalica from "../../imagens/flor-metalica.jpg";
import zoo from "../../imagens/zoo.jpg";
import museo from "../../imagens/museo.jpg";

let pacotesVan = [
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
  },
  {
    id: 2,
    nome: "Flor metalica ",
    imagem: florMetalica,
    descricao: 'City tour Premium (SELFIE TOUR)',
    duracao: '5h de duração',
    info:
      `Nesta categoria o cliente dispõe de 5 hrs de passeio, Possui 12 pontos turísticos com aproximadamente 10 paradas (boca, caminito, casa rosada, porto  madero,, cemitério de recoleta, flor metálica, rosedal, Mafalda e planetário, faculdade de direito). Buscando no seu Hotel entre 10h e 11h com finalização as 15h ou 15h30.Feito todos dias da semana. Passeio não cancelado em dias de chuva. **GUIAS FALAM PORTUGUES**. Voucher eletrónico após confirmação de pagamento.`,
    valores: [
      {
        id: 1,
        preco: 90,
      },
      {
        id: 2,
        preco: 80,
      },
      {
        id: 3,
        preco: 80,
      },
      {
        id: 4,
        preco: 80,
      },
      {
        id: 5,
        preco: 80,
      },
      {
        id: 6,
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
        preco: 195,
      },
      {
        id: 2,
        preco: 190,
      },
      {
        id: 3,
        preco: 190,
      },
      {
        id: 4,
        preco: 190,
      },
      {
        id: 5,
        preco: 190,
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
        preco: 120,
      },
      {
        id: 2,
        preco: 115,
      },
      {
        id: 3,
        preco: 115,
      },
      {
        id: 4,
        preco: 115,
      },
      {
        id: 5,
        preco: 115,
      },
      {
        id: 6,
        preco: 'Entrar em contato',
      }
    ]
  },
];

export default pacotesVan;
