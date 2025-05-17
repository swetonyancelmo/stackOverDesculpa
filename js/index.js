function gerarDesculpa() {
  // Arrays com as desculpas
  const desculpasTech = [
  "O bug era recurso, mas o cliente não entendeu.",
  "Funcionava no meu computador.",
  "Dei um git push no horário errado.",
  "Achei que hoje era domingo. Foi mal.",
  "Compilei a vida, mas deu erro em tempo de execução.",
  "Estava em uma call... comigo mesmo, mentalmente.",
  "Fiz um rollback na motivação e esqueci de dar commit.",
  "Meu código estava perfeito, até alguém executar.",
  "A internet caiu. Moral também.",
  "A IA sugeriu uma pausa e eu obedeci.",
  "Tentei debugar, mas descobri que o bug sou eu.",
  "Fiz o deploy no ambiente errado e agora moro lá.",
  "Coloquei o alarme em modo dark... não acordou.",
  "Achei que hoje era sexta. Spoiler: não era.",
  "Era pra ser um teste, virou produção sem querer.",
  "O café acabou. O sistema também.",
  "Me perdi entre branches e fiquei sem rumo.",
  "Subi tudo certo… só esqueci de salvar.",
  "A bateria do cérebro acabou antes da do notebook.",
  "Estava esperando o VS Code abrir. 40 minutos depois..."
  ];

  const desculpasTrabalho = [
  "Achei que hoje era feriado… e agi de acordo.",
  "A reunião entrou em loop infinito.",
  "O café acabou, então nada mais fazia sentido.",
  "A internet caiu e levou minha motivação junto.",
  "O Excel travou e levou minha produtividade pro limbo.",
  "Estava pronto pra trabalhar, mas meu foco estava off-line.",
  "Fiquei esperando o chefe dar bom dia pra começar.",
  "Eu estava esperando alguém mandar a tarefa… ninguém mandou.",
  "Fiz o que foi pedido. Só que em pensamento.",
  "Confundi a planilha real com a de teste. Ups.",
  "Fui responder o e-mail, acabei abrindo o YouTube.",
  "Recebi a tarefa, mas não recebi vontade.",
  "O fone tava no ouvido, mas o cérebro no modo avião.",
  "A meta era impossível, então decidi esperar um milagre.",
  "Achei que já tinha feito, mas só sonhei com isso.",
  "Tava 100% preparado, mas o sono venceu.",
  "Esperei a inspiração. Ela não veio.",
  "Minha agenda não sincronizou com minha alma.",
  "Fiquei em reunião mental com minha sanidade.",
  "Abri o Trello. Fechei a esperança."
  ];

  const desculpasGerais = [
  "O universo conspirou contra mim... de novo.",
  "Eu estava indo, mas tropecei no pensamento.",
  "Sonhei que já tinha feito, achei que valia.",
  "Meu cachorro ficou em cima do teclado e... enfim.",
  "Eu ia responder, mas a notificação sumiu.",
  "Meu despertador tocou, mas meu corpo ignorou.",
  "O Wi-Fi caiu justo quando eu ia começar, juro!",
  "A hora passou mais rápido que minha vontade de viver.",
  "Parei pra tomar um café e voltei só agora.",
  "Tava pronto, mas o clima não colaborou.",
  "Confundi o horário com o fuso horário de Tóquio.",
  "Hoje não é um bom dia pra decisões importantes… tipo acordar.",
  "Dei Alt+F4 sem querer na minha energia.",
  "Eu estava lá... em espírito.",
  "Era pra ser 10 minutos, mas o tempo me enganou.",
  "Fiquei preso no trânsito… emocional.",
  "Sabe quando tudo dá errado? Então, começou ontem.",
  "Me distraí tentando organizar minha distração.",
  "Hoje eu tava no modo 'recarregando'."
  ];

  // Pega o valor da categoria selecionada
  const categoriaSelecionada = document.getElementById("categoria").value;

  let desculpaEscolhida = "";

  // verifica qual opção foi selecionada
  if(categoriaSelecionada === "gerais") {
    desculpaEscolhida = desculpasGerais[Math.floor(Math.random() * desculpasGerais.length)];
  } else if(categoriaSelecionada === "trabalho") {
    desculpaEscolhida = desculpasTrabalho[Math.floor(Math.random() * desculpasTrabalho.length)];
  } else if(categoriaSelecionada === "tech") {
    desculpaEscolhida = desculpasTech[Math.floor(Math.random() * desculpasTech.length)];
  }

  document.getElementById("resultado").innerHTML = desculpaEscolhida;

}