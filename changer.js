/*
document.getElementById('triggerDiv').addEventListener('click', function() {
    // Cambiar el contenido del div en content.html
    fetch('content.html')
        .then(response => response.text())
        .then(data => {
            // Crear un DOMParser para analizar el contenido HTML
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');
            // Cambiar el contenido del div
            doc.getElementById('contentDiv').innerHTML = 'Nuevo contenido';
            // Reemplazar el contenido del body con el nuevo contenido
            document.body.innerHTML = doc.body.innerHTML;
        });
});
*/


document.getElementById('changerbio').addEventListener('click', function() {
    document.getElementById('miDiv').textContent = 'Contenido cambiado';
});