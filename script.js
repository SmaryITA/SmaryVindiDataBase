// Gestione del pulsante attivo nella navigazione
document.addEventListener("DOMContentLoaded", (event) => {
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split("/").pop() || "index.html";

  // Rimuovi active da tutti i bottoni
  document.querySelectorAll(".nav-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Aggiungi active al bottone corrispondente
  if (
    currentFile.includes("RaidsTable") ||
    currentPath.includes("/raids/view")
  ) {
    document.getElementById("btn-raids-view")?.classList.add("active");
  } else if (
    currentFile.includes("RedeemersTable") ||
    currentPath.includes("/redeemers/view")
  ) {
    document.getElementById("btn-redeemers-view")?.classList.add("active");
  } else if (
    currentFile.includes("SpaceTimeTable") ||
    currentPath.includes("/spacetime/view")
  ) {
    document.getElementById("btn-spacetime-view")?.classList.add("active");
  } else if (currentFile.includes("RhodsBracelets")) {
    document.getElementById("btn-rhods-view")?.classList.add("active");
  } else if (currentFile.includes("Scrolls")) {
    document.getElementById("btn-items-view")?.classList.add("active");
  } else if (currentFile.includes("AccessoryTable")) {
    document.getElementById("btn-accessory-view")?.classList.add("active");
  } else if (currentFile.includes("EriuGearTable")) {
    // Nuova condizione per Eriu
    document.getElementById("btn-eriu-view")?.classList.add("active");
  } else if (
    currentFile.includes("index") ||
    currentPath.includes("/gear/view")
  ) {
    document.getElementById("btn-gear-view")?.classList.add("active");
  }
});

// Gestione del cambio di pagina con conferma (opzionale)
document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const href = this.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
    if (href) {
      // Puoi aggiungere un loader o animazione qui se vuoi
      console.log("Navigating to:", href);
    }
  });
});

// Funzione per cercare nelle cards (utile se vuoi aggiungere una search bar)
function searchCards(searchTerm) {
  const cards = document.querySelectorAll(".gear-card");
  const term = searchTerm.toLowerCase();

  cards.forEach((card) => {
    const title =
      card.querySelector(".card-header h5")?.textContent.toLowerCase() || "";
    const stats = card.querySelectorAll(".stat-value");
    let statsText = "";
    stats.forEach((stat) => {
      statsText += stat.textContent + " ";
    });

    if (title.includes(term) || statsText.toLowerCase().includes(term)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Aggiungi listener per la search bar se esiste
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchBar");
  const searchButton = document.getElementById("searchButton");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchCards(e.target.value);
    });
  }

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      if (searchInput) {
        searchCards(searchInput.value);
      }
    });
  }
});

// Gestione dei valori +0 (se presenti)
document.addEventListener("DOMContentLoaded", () => {
  // Cerca in tutti gli elementi con classe stat-value
  document.querySelectorAll(".stat-value").forEach((element) => {
    if (element.textContent.trim() === "+0") {
      element.textContent = "-";
    }
  });

  // Cerca anche in altri elementi che potrebbero contenere +0
  document.querySelectorAll("td, span, div").forEach((element) => {
    if (element.textContent && element.textContent.trim() === "+0") {
      element.textContent = "-";
    }
  });
});

// Gestione del collapse con Bootstrap (assicura che funzioni)
document.addEventListener("DOMContentLoaded", function () {
  // Inizializza tutti i collapse di Bootstrap
  var collapseElementList = [].slice.call(
    document.querySelectorAll(".collapse"),
  );
  collapseElementList.forEach(function (collapseEl) {
    new bootstrap.Collapse(collapseEl, {
      toggle: false,
    });
  });

  // Aggiungi effetto di fade ai collapse
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-bs-target");
      if (targetId) {
        setTimeout(() => {
          const target = document.querySelector(targetId);
          if (target && target.classList.contains("show")) {
            target.style.opacity = "1";
          }
        }, 150);
      }
    });
  });
});

// Funzione per esportare i dati (se serve)
function exportCardData() {
  const cards = document.querySelectorAll(".gear-card");
  const data = [];

  cards.forEach((card) => {
    const title = card.querySelector(".card-header h5")?.textContent || "";
    const stats = {};

    card.querySelectorAll(".stat-item").forEach((item) => {
      const label =
        item.querySelector(".stat-label")?.textContent.replace(":", "") || "";
      const value = item.querySelector(".stat-value")?.textContent || "";
      stats[label] = value;
    });

    data.push({
      name: title,
      ...stats,
    });
  });

  console.log("Card data:", data);
  return data;
}

// Aggiungi gestione errori per immagini rotte
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      console.warn("Immagine non trovata:", this.src);
      // Puoi mettere un'immagine di fallback qui
      // this.src = 'icon/placeholder.png';
    });
  });
});

// Gestione del tema scuro (già presente, ma manteniamo la coerenza)
document.documentElement.style.backgroundColor = "rgb(40, 40, 40)";
document.body.style.backgroundColor = "rgb(40, 40, 40)";

// Event listener per il ridimensionamento della finestra
window.addEventListener("resize", () => {
  // Adatta eventuali elementi che necessitano di ricalcolo
  const width = window.innerWidth;
  const cards = document.querySelectorAll(".gear-card");

  if (width < 768) {
    cards.forEach((card) => {
      card.style.marginBottom = "15px";
    });
  } else {
    cards.forEach((card) => {
      card.style.marginBottom = "";
    });
  }
});

// Previeni il comportamento default per i link che non devono navigare
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Log di inizializzazione
console.log("Applicazione caricata con successo!");
console.log("Versione mobile con Bootstrap attiva");
