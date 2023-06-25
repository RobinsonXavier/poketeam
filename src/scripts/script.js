
function openCaptureWindow() {
  const captureButton = document.getElementById("busca");
  captureButton.addEventListener("click", () => {
    const captureWindow = document.querySelector(".busca-pokemon");
    captureWindow.classList.remove("invisivel");
    captureWindow.classList.add("visivel");
  });
}

function closeCaptureWindow() {
  const closeButton = document.querySelector(".busca-pokemon .botao-fechar");
  closeButton.addEventListener("click", () => {
    const captureWindow = document.querySelector(".busca-pokemon");
    captureWindow.classList.remove("visivel");
    captureWindow.classList.add("invisivel");
  })
}

openCaptureWindow();
closeCaptureWindow();