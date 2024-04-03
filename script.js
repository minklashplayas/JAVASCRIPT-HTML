document.addEventListener("DOMContentLoaded", function() {
  fetch('faq.json')
    .then(response => response.json())
    .then(data => {
      var faqContainer = document.getElementById('faqContainer');
      data.forEach(faq => {
        faqContainer.innerHTML += `
          <div class="faq">
            <h2>${faq.pregunta}</h2>
            <p>${faq.respuesta}</p>
          </div>
        `;
      });
    })
    .catch(error => console.error('Error al cargar las preguntas frecuentes:', error));
});
