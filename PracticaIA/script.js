const boton = document.getElementById('generar');
const entrada = document.getElementById('entradaPrompt');
const resultado = document.getElementById('resultado');

// Simulación de respuesta de IA según prompt
boton.addEventListener('click', () => {
    const prompt = entrada.value.trim();
    if(prompt === "") {
        resultado.textContent = "Por favor, escribe un prompt para generar la sugerencia.";
        return;
    }

    // Aquí simulamos la "IA" con respuestas predefinidas y creativas
    const respuestasIA = [
        `La IA sugiere un café llamado "Delicia Frutal": ${prompt} con un toque de caramelo.`,
        `La IA propone "Latte Aromático": ${prompt}, ideal para disfrutar en las mañanas.`,
        `Inspiración de IA: "Moca Especial": ${prompt} combinado con cacao y canela.`,
        `Nueva creación IA: "Café Tropical": ${prompt} con notas de piña y nuez.`,
        `"Espresso Innovador": ${prompt} con un toque secreto de la casa.`
    ];

    const seleccion = respuestasIA[Math.floor(Math.random() * respuestasIA.length)];
    resultado.textContent = seleccion;
});
