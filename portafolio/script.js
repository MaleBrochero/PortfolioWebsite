// Task 5: JavaScript - Adding interactivity

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Show a welcome message on the screen
    const btnBienvenida = document.getElementById("btn-bienvenida");
    if (btnBienvenida) {
        btnBienvenida.addEventListener("click", function() {
            alert("¡Bienvenido al portafolio de Maria Jose!");
        });
    }

    // 2. Change paragraph text on button click
    const btnCambiarTexto = document.getElementById("btn-cambiar-texto");
    const textoCambiante = document.getElementById("texto-cambiante");
    if (btnCambiarTexto && textoCambiante) {
        btnCambiarTexto.addEventListener("click", function() {
            textoCambiante.textContent = "¡Me apasiona aplicar mis conocimientos en mecatrónica para resolver problemas complejos y aportar valor en cada proyecto en el que participo!";
            btnCambiarTexto.style.display = "none"; // Hide the button after reading
        });
    }

    // 3. Dynamic effect (show/hide content)
    const btnToggle = document.getElementById("btn-toggle");
    const contenidoDinamico = document.getElementById("contenido-dinamico");
    if (btnToggle && contenidoDinamico) {
        btnToggle.addEventListener("click", function() {
            if (contenidoDinamico.style.display === "none" || contenidoDinamico.style.display === "") {
                contenidoDinamico.style.display = "block";
                btnToggle.textContent = "Ocultar Contenido";
            } else {
                contenidoDinamico.style.display = "none";
                btnToggle.textContent = "Mostrar Contenido";
            }
        });
    }

});
