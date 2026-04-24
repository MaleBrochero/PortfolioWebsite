// Tarea 5: JavaScript - Agregando interactividad

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Mostrar un mensaje de bienvenida en pantalla
    const btnBienvenida = document.getElementById("btn-bienvenida");
    if (btnBienvenida) {
        btnBienvenida.addEventListener("click", function() {
            alert("¡Bienvenido al portafolio de Maria Jose!");
        });
    }

    // 2. Cambiar el texto de un párrafo al hacer clic en un botón
    const btnCambiarTexto = document.getElementById("btn-cambiar-texto");
    const textoCambiante = document.getElementById("texto-cambiante");
    if (btnCambiarTexto && textoCambiante) {
        btnCambiarTexto.addEventListener("click", function() {
            textoCambiante.textContent = "¡Me apasiona aplicar mis conocimientos en mecatrónica para resolver problemas complejos y aportar valor en cada proyecto en el que participo!";
            btnCambiarTexto.style.display = "none"; // Ocultar el botón después de leer
        });
    }

    // 3. Efecto dinámico (mostrar/ocultar contenido)
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
