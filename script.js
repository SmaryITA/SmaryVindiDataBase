document.addEventListener("DOMContentLoaded", (event) => {
  const currentPath = window.location.pathname;

  if (currentPath.includes("/raids/view")) {
    document.getElementById("btn-raids-view").classList.add("active");
  } else if (currentPath.includes("/redeemers/view")) {
    document.getElementById("btn-redeemers-view").classList.add("active");
  } else if (currentPath.includes("/spacetime/view")) {
    document.getElementById("btn-spacetime-view").classList.add("active");
  } else if (currentPath.includes("/items/view")) {
    document.getElementById("btn-items-view").classList.add("active");
  } else if (currentPath.includes("/gear/view")) {
    document.getElementById("btn-gear-view").classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll("td"); // Seleziona tutte le celle della tabella

  cells.forEach((cell) => {
    if (cell.textContent.trim() === "+0") {
      cell.textContent = "-";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");
  var panels = document.getElementsByClassName("panel");

  for (var j = 0; j < panels.length; j++) {
    panels[j].style.display = "none";
  }

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
