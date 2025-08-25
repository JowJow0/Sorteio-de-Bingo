let numeros = Array.from({ length: 75 }, (_, i) => i + 1);
let sorteados = [];

function sortearNumero() {
  if (numeros.length === 0) {
    alert("Todos os números foram sorteados!");
    return;
  }

  const index = Math.floor(Math.random() * numeros.length);
  const numero = numeros.splice(index, 1)[0];
  sorteados.push(numero);

  // Determina a letra da coluna
  let letra = '';
  if (numero >= 1 && numero <= 15) letra = 'B';
  else if (numero >= 16 && numero <= 30) letra = 'I';
  else if (numero >= 31 && numero <= 45) letra = 'N';
  else if (numero >= 46 && numero <= 60) letra = 'G';
  else if (numero >= 61 && numero <= 75) letra = 'O';

  // Mostra letra e número juntos
  document.getElementById("numeroAtual").textContent = `${letra} - ${numero}`;

  atualizarLista();

  const audio = document.getElementById("somBingo");
  audio.currentTime = 0;
  audio.volume = 1.0;
  audio.play();
}

function atualizarLista() {
  ['B', 'I', 'N', 'G', 'O'].forEach(letra => {
    document.getElementById(`linha${letra}`).innerHTML = '';
  });

  sorteados.forEach(num => {
    const bola = document.createElement("div");
    bola.className = "bola";

    let letra = '';
    if (num >= 1 && num <= 15) letra = 'B';
    else if (num >= 16 && num <= 30) letra = 'I';
    else if (num >= 31 && num <= 45) letra = 'N';
    else if (num >= 46 && num <= 60) letra = 'G';
    else if (num >= 61 && num <= 75) letra = 'O';

    bola.classList.add(letra);
    bola.textContent = `${num}`;
    document.getElementById(`linha${letra}`).appendChild(bola);
  });
}

function reiniciar() {
  numeros = Array.from({ length: 75 }, (_, i) => i + 1);
  sorteados = [];
  document.getElementById("numeroAtual").textContent = "--";
  atualizarLista();
}

function alternarTema() {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("btnTema");

  if (document.body.classList.contains("light-mode")) {
    btn.textContent = "☀️ Modo Claro";
  } else {
    btn.textContent = "🌙 Modo Escuro";
  }
}