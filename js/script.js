let vida1 = 100;
let vida2 = 100;

function golpear(seleccion) {
    let golpe = Math.floor(Math.random() * 25);

    if (seleccion === 1) {
        vida2 -= golpe;
        if (vida2 < 0) vida2 = 0;
        
        document.getElementById("caballero2").style.transform = "translateX(20px)";
        setTimeout(() => { 
            document.getElementById("caballero2").style.transform = ""; 
        }, 100);

        document.getElementById("vida2").textContent = vida2;

    } else {
        vida1 -= golpe;
        if (vida1 < 0) vida1 = 0;

        document.getElementById("caballero1").style.transform = "translateX(-20px)";
        setTimeout(() => { 
            document.getElementById("caballero1").style.transform = ""; 
        }, 100);

        document.getElementById("vida1").textContent = vida1;
    }

    if (vida1 <= 0) {
        document.getElementById("resultado").textContent = "El caballero más fuerte es el 2 💪🏻";
        document.getElementById("vida1").textContent = 0;
    } else if (vida2 <= 0) {
        document.getElementById("resultado").textContent = "El caballero más fuerte es el 1 💪🏻";
        document.getElementById("vida2").textContent = 0;
    }
}