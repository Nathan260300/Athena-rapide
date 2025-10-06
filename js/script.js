function redirigerVersSite() {
    window.location.href = 'https://athena.moncollege-valdoise.fr/';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirigerVersSite();
    }
});

console.log(
   `%cMade with 🕑 and 💖 by Nathan J.`,
   "background: #c3e88d; color: #233238; padding: .5em 1em;"
 )