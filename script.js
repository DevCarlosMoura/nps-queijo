const produtos = [
  {
    nome: "Requeijão copo",
    descricao: "Queijo processado sabor requeijão, um mix de queijos na sua fabricação. Ideal para cafés da manhã, acompanhante de lanches e torradas.",
    imagem: "img/requeijao.png",
    alt: "Requeijão copo"
  },
  {
    nome: "Queijo Parmesão",
    descricao: "Queijo duro com 6 meses de cura, muito usado para ralar sobre pizzas, massas e molhos, perfeito para gratinar.",
    imagem: "img/parmesao.png",
    alt: "Queijo Parmesão"
  },
  {
    nome: "Queijo Provolone",
    descricao: "Queijo curado e defumado naturalmente, pode ser consumido puro, em lanches e porções, como petisco pode ser preparado a milanesa.",
    imagem: "img/provolone.png",
    alt: "Queijo Provolone"
  },
  {
    nome: "Queijo Gruyere",
    descricao: "O queijo Gruyere é mais forte do que o queijo Emmental e sua textura mais cremosa. Pode ser consumido puro, acompanhando pães e frutas, derretido em receitas e gratinados.",
    imagem: "img/gruyere.png", // Adicione o caminho correto da imagem
    alt: "Queijo Gruyere"
  },
  {
    nome: "Queijo Gorgonzola",
    descricao: "O Queijo azul mofado tem um sabor forte com aroma intenso, possui veias verde-azuladas, devido a injeção de fungos durante o processo de maturação. Utilizado em saladas, massas, molhos, tabua de queijos e muito mais.",
    imagem: "img/gorgonzola.png", // Adicione o caminho correto da imagem
    alt: "Queijo Gorgonzola"
  },
  {
    nome: "Queijo do Reino",
    descricao: "O queijo do Reino é uma variedade de queijo semiduro e maturado Brasileiro.",
    imagem: "img/reino.png", // Adicione o caminho correto da imagem
    alt: "Queijo do Reino"
  },
  // Adicione os outros produtos aqui seguindo o mesmo formato
  {
    nome: "Ricota",
    descricao: "O queijo Ricota é feito com leite desnatado e soro do leite, ideal para sanduiches, saladas, receitas de pão de queijo, além de combinar com o café da manhã.",
    imagem: "img/ricota.png",
    alt: "Ricota"
  },
  {
    nome: "Queijo Gouda",
    descricao: "Queijo de sabor marcante, excelente para sanduíches e tábuas.",
    imagem: "img/gouda.png",
    alt: "Queijo Gouda"
  },
  {
    nome: "Queijo Coalho",
    descricao: "Queijo não maturado, hoje muito consumido como acompanhamento de churrasco, com formação de casca crocante quando colocado na grelha, pode ser servido com mel e geleias",
    imagem: "img/coalho.png",
    alt: "Queijo Coalho"
  },
  {
    nome: "Queijo Emmental",
    descricao: "O Emmental é um queijo Suíço, apresenta cor amarelada, casca escovada e dura, consistência média e característicos buracos internos. Seu sabor é suave e levemente adocicado.",
    imagem: "img/emmental.png",
    alt: "Queijo Emmental"
  },
  {
    nome: "Parmesão Supremo",
    descricao: "O parmesão Supremo é um queijo duro, com massa de Grana Padano de 8 meses de cura, uma explosão de sabor, ideal para finalização de pratos.",
    imagem: "img/psupremo.png",
    alt: "Parmesão Supremo"
  },
  {
    nome: "FONDUE",
    descricao: "Produto consiste basicamente em uma mistura de Gruyere e Emmental, ideal para culinárias de outono e inverno.",
    imagem: "img/fondue.png",
    alt: "FONDUE"
  }
];

$(document).ready(function() {
  const carouselProdutos = $("#carousel-produtos");

  // Adiciona os itens ao carrossel dinamicamente
  produtos.forEach(produto => {
    const item = `
      <div class="item">
        <img src="${produto.imagem}" alt="${produto.alt}" />
        <div class="produto-info">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
        </div>
      </div>
    `;
    carouselProdutos.append(item);
  });

  // Inicializa o Owl Carousel com as configurações desejadas
  carouselProdutos.owlCarousel({
    items: 3,
    margin: 20, // Aumentei um pouco a margem para melhor visualização
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true, // Adiciona as setas de navegação
    dots: false, // Removi os dots (opcional)
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], // Ícones para as setas (Font Awesome necessário)
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});