document.addEventListener("DOMContentLoaded", () => {
  const tablaBody = document.getElementById("tablaBody");
  const encabezados = document.querySelectorAll("th[data-col]");
  const filtroEstacion = document.getElementById("filtroEstacion");
  const filtroCliente = document.getElementById("filtroCliente");

  let datosOriginal = [];

  fetch("../DATA/pedidos.csv")
    .then(res => res.text())
    .then(text => {
      const lines = text.trim().split("\n").slice(1);
      datosOriginal = lines.map(line => line.split(","));
      cargarFiltros(datosOriginal);
      renderTabla(datosOriginal);
    })
    .catch(err => console.error("Error al cargar CSV:", err));

  function cargarFiltros(data) {
    const estaciones = [...new Set(data.map(d => d[2]))];
    const clientes = [...new Set(data.map(d => d[1]))];

    estaciones.forEach(e => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = e;
      filtroEstacion.appendChild(opt);
    });

    clientes.forEach(c => {
      const opt = document.createElement("option");
      opt.value = opt.textContent = c;
      filtroCliente.appendChild(opt);
    });
  }

  function renderTabla(data) {
    tablaBody.innerHTML = "";
    data.forEach(fila => {
      const tr = document.createElement("tr");
      fila.forEach(col => {
        const td = document.createElement("td");
        td.textContent = col;
        tr.appendChild(td);
      });
      tablaBody.appendChild(tr);
    });
  }

  function aplicarFiltros() {
    const estacion = filtroEstacion.value;
    const cliente = filtroCliente.value;

    const filtrados = datosOriginal.filter(fila => {
      return (!estacion || fila[2] === estacion) &&
             (!cliente || fila[1] === cliente);
    });

    renderTabla(filtrados);
  }

  filtroEstacion.addEventListener("change", aplicarFiltros);
  filtroCliente.addEventListener("change", aplicarFiltros);

  encabezados.forEach(th => {
    th.addEventListener("click", () => {
      const colIndex = parseInt(th.getAttribute("data-col"));
      const isMonto = colIndex === 3;

      datosOriginal.sort((a, b) => {
        const valA = isMonto ? parseInt(a[colIndex]) : a[colIndex];
        const valB = isMonto ? parseInt(b[colIndex]) : b[colIndex];
        return valA > valB ? 1 : valA < valB ? -1 : 0;
      });

      aplicarFiltros();
    });
  });
});
