function generarQR() {
  const texto = document.getElementById('texto').value.trim();
  if (!texto) {
    alert("Por favor ingresa texto o URL");
    return;
  }

  // Limpia QR previo
  document.getElementById('qrcode').innerHTML = "";

  // Genera nuevo QR
  new QRCode(document.getElementById('qrcode'), {
    text: texto,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
