const quotes = [
  {
    id: 1,
    author: "Valnice Milhomens",
    quote:
      "Que dos nossos lábios, brotem fruto de sabedoria, sensatez, riqueza, sustento, e tudo que é próprio de um canal do bom e do bem.",
    color: "#fd9529",
  },
  {
    id: 2,
    author: "Valnice Milhomens",
    quote:
      "Se cristão é ser a reprodução de Jesus Cristo em seu caráter e em sua missão.",
    color: "#fd4629",
  },
  {
    id: 3,
    author: "Valnice Milhomens",
    quote: "A fé não é transferida pela coletividade",
    color: "#a5ab4a",
  },
  {
    id: 4,
    author: "Valnice Milhomens",
    quote:
      "O Calvário não foi em vão e o seus efeitos continuam vivos e operantes, disponíveis a todo aquele que crê.",
    color: "#88e225",
  },
  {
    id: 5,
    author: "Valnice Milhomens",
    quote:
      "Libertação não é substituto de arrependimento e confissão de pecados.",
    color: "#25e2d1",
  },
  {
    id: 6,
    author: "Valnice Milhomens",
    quote:
      "O plano de Deus é um só e não há plano paralelo. Seguir o caminho paralelo é estar fora do verdadeiro plano.",
    color: "#258be2",
  },
  {
    id: 7,
    author: "Valnice Milhomens",
    quote:
      "Só provará o sabor da vitória quem primeiro provou o furor da batalha.",
    color: "#5425e2",
  },
  {
    id: 8,
    author: "Valnice Milhomens",
    quote: "Temos que romper as velhas estruturas para conter o novo mover.",
    color: "#ab25e2",
  },
  {
    id: 9,
    author: "Valnice Milhomens",
    quote: "Para cada estágio de restauração, virá um nível de ataque.",
    color: "#e225b9",
  },
  {
    id: 10,
    author: "Valnice Milhomens",
    quote:
      "Deus em sua economia divina, não nos permitirá experiências desnecessárias.",
    color: "#5a4949",
  },
  {
    id: 11,
    author: "Valnice Milhomens",
    quote:
      "Desviar tempo e energia para considerar os comentários de terceiros é derrota.",
    color: "#82ef8f",
  },
  {
    id: 12,
    author: "Valnice Milhomens",
    quote:
      "Em nosso cotidiano todas as situações, tanto as boas como as más, são usadas por Deus para forjar em nós o caráter de Cristo.",
    color: "#82dbef",
  },
  {
    id: 13,
    author: "Valnice Milhomens",
    quote: "Santidade é a soma de todos os atributos morais de Deus.",
    color: "#e69ac8",
  },
  {
    id: 14,
    author: "Valnice Milhomens",
    quote:
      "As nossas atitudes não devem ser movidas por reações emocionais geradas por terceiros, mas por princípios divinos.",
    color: "#000000",
  },
  {
    id: 15,
    author: "Valnice Milhomens",
    quote: "Jesus desceu ao nível do homem para levar-nos ao nível de Deus.",
    color: "#6c18a0",
  },
  {
    id: 16,
    author: "Valnice Milhomens",
    quote:
      "Para discernir um engano, há que se ter um ponto de referência, e este é a Palavra de Deus.",
    color: "#e22525",
  },
  {
    id: 17,
    author: "Valnice Milhomens",
    quote: "Da união entre o Espírito e a Palavra vida é gerada.",
    color: "#965757",
  },
  {
    id: 18,
    author: "Valnice Milhomens",
    quote:
      "Palavras confessada ssão sementes plantadas. Confissôes repetidas são sementes regadas. Terminarão germinando. Então nunca verbalize o que não quer ver manifesto.",
    color: "#1a18a0",
  },
  {
    id: 19,
    author: "Valnice Milhomens",
    quote:
      "O Cristianismo não é Religião a varejo, é um relacionamento pessoal transformador com Jesus Cristo.",
    color: "#efa603",
  },
  {
    id: 20,
    author: "Valnice Milhomens",
    quote:
      "Humildade é um estado equilibrado de si mesmo, nem para mais nem para menos.",
    color: "#a5ab4a",
  },
  {
    id: 21,
    author: "Valnice Milhomens",
    quote:
      "Vou Te obedecer sem nunca Te questionar. Confiar em Ti sob qualquer circunstância.",
    color: "#9a8eda",
  },
  {
    id: 22,
    author: "Valnice Milhomens",
    quote: "Experiência é caminho trilhado.",
    color: "#000000",
  },
  {
    id: 23,
    author: "Valnice Milhomens",
    quote:
      'A coisa mais importante não é como se começa, mas como se termina! A recompensa é para o que "PERSEVERAR ATÉ AO FIM".',
    color: "#18a09a",
  },
  {
    id: 24,
    author: "Valnice Milhomens",
    quote: "Se tenho convicção de que Deus me pediu algo, Ele tem tudo de mim!",
    color: "#fd9529",
  },
  {
    id: 25,
    author: "Valnice Milhomens",
    quote:
      "Não vale a pena fazer qualquer coisa na vida, que não seja cumprir os propósitos de Yahweh. Não vivemos para construir reinos pessoais. Temos o privilégio de viver por Ele.",
    color: "#fd4629",
  },
  {
    id: 26,
    author: "Valnice Milhomens",
    quote: "Nós não nos firmamos no que somos, mas no que Ele fez por nós",
    color: "#a5ab4a",
  },
  {
    id: 27,
    author: "Valnice Milhomens",
    quote:
      "Quando temos mais para fazer do que possibilidades de dar conta, estamos fazendo coisas acerca das quais Deus não falou. Ele, em sua sabedoria, jamais nos pede mais do que temos condições de fazer, e NADA nos confia para nossa Destruição",
    color: "#88e225",
  },
  {
    id: 28,
    author: "Valnice Milhomens",
    quote:
      "Quando você se converte, o Espirito se torna residente, mas quando é batizado, o Espírito se torna presidente; Quando você recebe a Cristo, tem o Espírito, mas quando é batizado por Jesus no Espírito Santo, é o Espírito quem o tem",
    color: "#25e2d1",
  },
  {
    id: 29,
    author: "Valnice Milhomens",
    quote:
      "Se eu não venço a tentação, não é porque Deus não me deu armas, é porque ou não as usei ou porque amo o pecado.",
    color: "#258be2",
  },
  {
    id: 30,
    author: "Valnice Milhomens",
    quote:
      "A Igreja é mais que um prédio, ela é composta por pedras vivas, isto é, pessoas em cujas vidas Cristo se reproduz",
    color: "#5425e2",
  },
  {
    id: 31,
    author: "Valnice Milhomens",
    quote:
      "O triunfo de sua missão está intimamente ligado ao cumprimento conjunto do papel de cada um. (Falando sobre a Igreja)",
    color: "#ab25e2",
  },
  {
    id: 32,
    author: "Valnice Milhomens",
    quote:
      "O Amor não é um sentimento da alma, mas uma virtude de um espírito recriado pela semente Divina",
    color: "#e225b9",
  },
  {
    id: 33,
    author: "Valnice Milhomens",
    quote:
      "O Reino de Deus não é para todos, em oferta sim, em pratica, não. O Reino de Deus destina-se exclusivamente aos que aceitam as exigências do Reino.",
    color: "#5a4949",
  },
  {
    id: 34,
    author: "Valnice Milhomens",
    quote: "O Lugar mais seguro da terra, é o centro da vontade de Deus",
    color: "#82ef8f",
  },
  {
    id: 35,
    author: "Valnice Milhomens",
    quote:
      "Nada tem a ver comigo, tudo tem a ver com Ele. Tudo o que preciso fazer é crer e obedecer",
    color: "#82dbef",
  },
  {
    id: 36,
    author: "Valnice Milhomens",
    quote:
      "Ninguém cumpre chamado divino com métodos humanos. Cumpre-se chamado divino com métodos divinos!",
    color: "#e69ac8",
  },
  {
    id: 37,
    author: "Valnice Milhomens",
    quote: "O adorador torna-se semelhante aquele a quem adora.",
    color: "#18a09a",
  },
  {
    id: 38,
    author: "Valnice Milhomens",
    quote:
      "Muitos fogem do legalismo religioso e chegam ao extremo da completa liberdade da carne e suas mentes ficam complemente cauterizadas.",
    color: "#fd9529",
  },
  {
    id: 39,
    author: "Valnice Milhomens",
    quote:
      "Posso escolher o caminho que eu desejar, mas não posso escolher as consequências das minhas decisões; elas se lhe seguem naturalmente.",
    color: "#e69ac8",
  },
  {
    id: 40,
    author: "Valnice Milhomens",
    quote: "A dúvida e a incredulidade são irmãs gêmeas.",
    color: "#a5ab4a",
  },
  {
    id: 41,
    author: "Valnice Milhomens",
    quote:
      "Os desejos não são maus em si.  Eles nos foram dados por Deus.  Não há problema em desejar-se comer, por exemplo.  O mal está no modo como o desejo é satisfeito.  Quando fora da palavra de Deus, leva ao pecado.",
    color: "#82ef8f",
  },
];

export default quotes;
