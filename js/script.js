// === RESERVAS: marcar horarios disponibles simple ===
const horarios = [
    "Lunes 08:00 - 10:00", "Lunes 16:00 - 18:00",
    "Martes 09:00 - 11:00", "Martes 17:00 - 19:00",
    "Miércoles 08:00 - 10:00", "Miércoles 16:00 - 18:00",
    "Jueves 09:00 - 11:00", "Jueves 17:00 - 19:00",
    "Viernes 08:00 - 12:00", "Sábado 09:00 - 13:00"
];

function cargarHorarios(){
    const lista = document.getElementById("lista-horarios");
    if(!lista) return;
    horarios.forEach(h=>{
        lista.innerHTML += `<li class="list-group-item">✅ ${h}</li>`;
    });
}

// Ejecutar al cargar página
document.addEventListener("DOMContentLoaded", cargarHorarios);