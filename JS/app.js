document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "dashboard.html";
    });
  }

  // Cargar datos al Dashboard si existen los elementos
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("pedidosContador", "128");
  setText("carteraVencida", "$3.560.000");
  setText("carteraAlDia", "$5.820.000");

  // Navegación entre vistas
  const setupNavigation = (id, target) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = target;
      });
    }
  };

  setupNavigation("goToInicio", "dashboard.html");
  setupNavigation("goToCliente", "cliente.html");
  setupNavigation("goToPQRS", "pqrs.html");
  setupNavigation("goToPedidos", "pedidos.html");
  
});
function crearGraficas() {
  new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo'],
      datasets: [{
        label: 'Pedidos',
        data: [20, 30, 25],
        backgroundColor: '#0d6efd'
      }]
    }
  });

  new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
      labels: ['2022', '2023', '2024'],
      datasets: [{
        label: 'Cartera Vencida',
        data: [2.1, 3.4, 2.8],
        borderColor: '#198754',
        fill: false
      }]
    }
  });

  new Chart(document.getElementById("scatterChart"), {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Pagos',
        data: [{x:1,y:3},{x:2,y:4},{x:3,y:2}],
        backgroundColor: '#ffc107'
      }]
    },
    options: {
      scales: {
        x: { type: 'linear', position: 'bottom' }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", crearGraficas);
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('closed');
}
