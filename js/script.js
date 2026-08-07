// Navegación cambia al desplazar
window.addEventListener('scroll', ()=>{
    const nav=document.querySelector('.navbar');
    nav.classList.toggle('scrolled', window.scrollY>30);
});

// Observador animación entrada escalonada
const observador = new IntersectionObserver((entradas)=>{
    entradas.forEach((el, idx)=>{
        if(el.isIntersecting){
            setTimeout(()=>el.target.classList.add('visible'), idx*80);
        }
    })
}, {threshold:0.12, rootMargin:'0px 0px -40px'});
document.querySelectorAll('.fade-up').forEach(elm=> observador.observe(elm));

// Carga horarios con animación integrada
const horarios = [
    "Lunes 08:00 - 10:00", "Lunes 16:00 - 18:00",
    "Martes 09:00 - 11:00", "Martes 17:00 - 19:00",
    "Miércoles 08:00 - 10:00", "Miércoles 16:00 - 18:00",
    "Jueves 09:00 - 11:00", "Jueves 17:00 - 19:00",
    "Viernes 08:00 - 12:00", "Sábado 09:00 - 13:00"
];
function cargarHorarios(){
    const lista=document.getElementById("lista-horarios");
    if(!lista)return;
    horarios.forEach(h=>{
        const li=document.createElement("li");
        li.className="list-group-item fade-up";
        li.innerHTML=`<strong style="color:#15803D;">✓</strong> ${h}`;
        lista.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", cargarHorarios);