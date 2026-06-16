//
// TACTICAL OPERATIONS CORE SYSTEM
// MW2-style UI engine base
//

/* ---------------- CLOCK ---------------- */

function startClock(){
    const clock = document.querySelectorAll(".clock");

    function update(){
        const now = new Date().toUTCString();
        clock.forEach(c => c.textContent = now);
    }

    update();
    setInterval(update, 1000);
}

/* ---------------- TYPE EFFECT (for future briefings) ---------------- */

function typeText(element, text, speed = 20){
    let i = 0;
    element.textContent = "";

    function type(){
        if(i < text.length){
            element.textContent += text[i];
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

/* ---------------- RANDOM UI FLICKER (MW2 FEEL) ---------------- */

function flicker(element, intensity = 0.03){
    setInterval(() => {
        if(Math.random() < intensity){
            element.style.opacity = 0.6;
            setTimeout(() => element.style.opacity = 1, 80);
        }
    }, 200);
}

/* ---------------- INIT SYSTEM ---------------- */

window.addEventListener("DOMContentLoaded", () => {
    startClock();

    // apply flicker to logos for realism
    document.querySelectorAll(".logo").forEach(el => flicker(el, 0.02));
});
