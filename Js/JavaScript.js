/*Comentarios en JavaScript*/

alert("Este es mi cuarto mensaje alert en JavaScript -Externo -Antes del body");

// 1. DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ El DOM está completamente cargado");
});

// 2. load
window.addEventListener("load", () => {
  console.log("🌎 La página y todos los recursos se han cargado completamente");
});

// 3. unload
window.addEventListener("unload", () => {
  console.log("👋 La página se está cerrando o recargando");
});

// 4. beforeunload
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = "¿Seguro que quieres salir de la página?";
});

// 5. visibilitychange
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    console.log("👀 La pestaña está oculta");
  } else {
    console.log("👁️ La pestaña volvió a ser visible");
  }
});

// 6. readystatechange
document.addEventListener("readystatechange", () => {
  console.log("📄 Estado del documento:", document.readyState);
});

// 7. fullscreenchange y fullscreenerror
document.addEventListener("fullscreenchange", () => {
  console.log("🖥️ Cambio de modo pantalla completa detectado");
});
document.addEventListener("fullscreenerror", () => {
  console.log("❌ Error al intentar entrar/salir del modo pantalla completa");
});

// 8. copy, cut, paste
document.addEventListener("copy", () => console.log("📋 Copiaste texto"));
document.addEventListener("cut", () => console.log("✂️ Cortaste texto"));
document.addEventListener("paste", () => console.log("📥 Pegaste texto"));

// 9. selectionchange
document.addEventListener("selectionchange", () => {
  const texto = document.getSelection().toString();
  if (texto) console.log("🔍 Seleccionaste:", texto);
});

// 10. scroll
window.addEventListener("scroll", () => {
  console.log("🧭 Posición de scroll actual:", window.scrollY);
});
