function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

// Adicionar um evento de clique para fechar o pop-up ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        fecharPopup();
    }
}