// ===========================
// BANCO DE DADOS SIMULADO (CRUD)
// ===========================
let database = [];

function addAction() {
  const input = document.getElementById("db-input");
  const text = input.value.trim();
  if (text === "") return;

  // Cria o dado com ID único e salva
  database.push({ id: Date.now(), text: text });
  input.value = "";
  renderList();
  triggerEffect("success");
}

function deleteAction(id) {
  // Filtra o "banco" removendo o ID selecionado
  database = database.filter((item) => item.id !== id);
  renderList();
}

function renderList() {
  const list = document.getElementById("action-list");
  list.innerHTML = ""; // Limpa a lista antes de renderizar

  if (database.length === 0) {
    list.innerHTML =
      '<li class="empty-msg" style="color:var(--text-muted); text-align:center; padding: 1rem; font-size:13px;">Vazio. Adicione uma ação acima.</li>';
    return;
  }

  database.forEach((item) => {
    const li = document.createElement("li");
    li.className = "action-item";
    li.innerHTML = `
            <span>${item.text}</span>
            <button class="btn-delete" onclick="deleteAction(${item.id})">Apagar</button>
        `;
    list.appendChild(li);
  });
}

// ===========================
// FEEDBACK E PROCESSAMENTO
// ===========================
function triggerEffect(type) {
  const d = document.getElementById("toast-display");
  d.textContent =
    type === "success"
      ? "✅ Sucesso! Dado processado."
      : "❌ Erro: Tente novamente.";
  d.style.color = type === "success" ? "var(--success)" : "var(--error)";
}

function simulateHeavyTask(btn) {
  btn.textContent = "Processando...";
  btn.disabled = true; // Prevenção de duplo clique
  btn.style.opacity = "0.5";

  setTimeout(() => {
    btn.textContent = "Executar Script";
    btn.disabled = false;
    btn.style.opacity = "1";
    triggerEffect("success");
  }, 1500); // Latência simulada de 1.5s
}

// ===========================
// GERENCIADOR DE TEMA (O Visual "Menos Horroroso")
// ===========================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  // Alterna a classe no <body>
  document.body.classList.toggle("light-mode");

  // Verifica qual modo está ativo para atualizar o texto do botão
  const isLight = document.body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️ Light Mode" : "🌙 Dark Mode";
});
