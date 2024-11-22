document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('blanco-y-negro');
    this.innerText = document.body.classList.contains('blanco-y-negro') ? 'Desactivar Blanco y Negro' : 'Activar Blanco y Negro';
});


