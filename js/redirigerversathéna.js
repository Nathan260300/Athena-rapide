function redirigerVersSite() {
            window.location.href = 'https://athena.moncollege-valdoise.fr/';
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                redirigerVersSite();
            }
        });