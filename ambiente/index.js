function ingrandisci(immagine){

immagine.style.width="450px";
immagine.style.height="350px";



immagine.style.pointerEvents = "none"; 

localStorage.setItem("ambiente",immagine.src);
window.location.href = "../gioco/p.html";

}