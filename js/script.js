const perguntas = document.querySelectorAll(".conteudo-perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

perguntas.forEach(dt => {
  const plusIcon = dt.querySelector(".icon-plus");
  const minusIcon = dt.querySelector(".icon-minus");

  plusIcon.addEventListener("click", function() {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'inline';
  });

  minusIcon.addEventListener("click", function() {
    minusIcon.style.display = 'none';
    plusIcon.style.display = 'inline';
  });
});




