window.addEventListener("DOMContentLoaded", function () {
    // =================== SECCIÓN 1: CALCULADORA ===================
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultadoCalc = document.getElementById("resultadoCalc");

    function operar(tipo) {
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        let resultado;

        if (isNaN(n1) || isNaN(n2)) {
            resultadoCalc.textContent = "Por favor, ingrese ambos números.";
            return;
        }

        switch (tipo) {
            case "sumar":
                resultado = n1 + n2;
                break;
            case "restar":
                resultado = n1 - n2;
                break;
            case "multiplicar":
                resultado = n1 * n2;
                break;
            case "dividir":
                if (n2 === 0) {
                    resultadoCalc.textContent = "No se puede dividir entre 0.";
                    return;
                }
                resultado = n1 / n2;
                break;
        }
        resultadoCalc.textContent = "Resultado: " + resultado;
    }

    document.getElementById("btnSumar").addEventListener("click", () => operar("sumar"));
    document.getElementById("btnRestar").addEventListener("click", () => operar("restar"));
    document.getElementById("btnMultiplicar").addEventListener("click", () => operar("multiplicar"));
    document.getElementById("btnDividir").addEventListener("click", () => operar("dividir"));

   // =================== SECCIÓN 2: FORMULARIO ===================
const form = document.getElementById("formRegistro");
const mensajeFinal = document.getElementById("mensajeFinal");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("txtNombre").value.trim();
    const correo = document.getElementById("txtCorreo").value.trim();
    const contrasena = document.getElementById("txtContraseña").value.trim();
    const fechaNac = document.getElementById("txtfechanac").value;

    if (nombre.length < 3) {
        mensajeFinal.textContent = "El nombre debe tener al menos 3 caracteres.";
        mensajeFinal.style.color = "red";
        return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) {
        mensajeFinal.textContent = "Formato de correo inválido.";
        mensajeFinal.style.color = "red";
        return;
    }

    if (contrasena.length < 6) {
        mensajeFinal.textContent = "La contraseña debe tener al menos 6 caracteres.";
        mensajeFinal.style.color = "red";
        return;
    }

    if (!fechaNac) {
        mensajeFinal.textContent = "Debe ingresar su fecha de nacimiento.";
        mensajeFinal.style.color = "red";
        return;
    }

    mensajeFinal.textContent = "Registro exitoso. ¡Bienvenido!";
    mensajeFinal.style.color = "green";
});


    // =================== SECCIÓN 3: FECHAS ===================
    const fecha1 = document.getElementById("fecha1");
    const fecha2 = document.getElementById("fecha2");
    const resultadoFechas = document.getElementById("resultadoFechas");
    const btnCalcularFechas = document.getElementById("btnCalcularFechas");

    btnCalcularFechas.addEventListener("click", function () {
        if (fecha1.value === "" || fecha2.value === "") {
            resultadoFechas.textContent = "Debe seleccionar ambas fechas.";
            resultadoFechas.style.color = "red";
            return;
        }

        const f1 = new Date(fecha1.value);
        const f2 = new Date(fecha2.value);

        const diferenciaMs = Math.abs(f2 - f1);
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

        resultadoFechas.textContent = "Diferencia en días: " + dias;
        resultadoFechas.style.color = "green";
    });
});
