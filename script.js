document.getElementById('senhaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var senha = document.getElementById('senha').value;

    if (senha === "Samara Mendonça Neves do Carmo" || "Samara Mendonça Neves Veiga") {
        window.location.href = "quatro-janelas.html";
    } if  (senha != "Samara Mendonça Neves do Carmo" || "Samara Mendonça Neves Veiga")
        window.location.href = "senha-incorreta.html";
    
});
