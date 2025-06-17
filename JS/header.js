document.addEventListener("DOMContentLoaded", () => {
  const banner = `
    <header class="main-header">
      <div class="logo-section">
        <a href="dashboard.html">
          <img src="../Images/logo.png" alt="Logo Petrodecol" class="logo" />
        </a>
      </div>

      <nav class="nav-icons">
        <ul class="nav-links">
          <li><a href="dashboard.html" title="Inicio"><i class="fas fa-home"></i></a></li>
          <li><a href="estado-cuenta.html" title="Estado de Cuenta"><i class="fas fa-file-alt"></i></a></li>
          <li><a href="pedidos.html" title="Pedidos"><i class="fas fa-box"></i></a></li>
          <li><a href="factura-venta.html" title="Factura Venta"><i class="fas fa-file-invoice-dollar"></i></a></li>
          <li><a href="notificacion-abono.html" title="Notificación de Abono"><i class="fas fa-bell"></i></a></li>
          <li><a href="pqrs.html" title="PQRS"><i class="fas fa-envelope-open-text"></i></a></li>
        </ul>
      </nav>

      <div class="logout-link">
        <a href="#" onclick="cerrarSesion()" title="Cerrar sesión">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
    </header>
  `;

  const bannerContainer = document.getElementById("bannerContainer");
  if (bannerContainer) {
    bannerContainer.innerHTML = banner;
  }
});

function cerrarSesion() {
  if (confirm("¿Deseas cerrar sesión?")) {
    window.location.href = "index.html";
  }
}
