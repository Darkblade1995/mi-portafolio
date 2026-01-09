let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        
        // Columna 1: Programming & Engineering
        habilidades[0].style.width = "80%"; // C++
        habilidades[1].style.width = "75%"; // Java
        habilidades[2].style.width = "75%"; // Python
        habilidades[3].style.width = "70%"; // JavaScript
        habilidades[4].style.width = "65%"; // PHP
        
        // Columna 2: Web, Backend & Systems
        habilidades[5].style.width = "85%"; // HTML & CSS
        habilidades[6].style.width = "65%"; // React & Django
        habilidades[7].style.width = "80%"; // API Design
        habilidades[8].style.width = "75%"; // MySQL
        habilidades[9].style.width = "60%"; // Docker
    }
}

window.onscroll = function(){
    efectoHabilidades();
}