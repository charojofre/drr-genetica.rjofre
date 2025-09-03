    document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const notification = document.querySelector('.notification');
            
            if (contactForm && notification) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Obtener datos del formulario
                    const nombre = document.getElementById('nombre').value;
                    const email = document.getElementById('email').value;
                    const provincia = document.getElementById('provincia').value;
                    const localidad = document.getElementById('localidad').value;
                    const telefono = document.getElementById('telefono').value;
                    const interes = document.getElementById('interes').value;
                    const mensaje = document.getElementById('mensaje').value;
                    
                    // Validar que todos los campos requeridos tengan valor
                    if (!nombre || !email || !provincia || !localidad || !telefono || !interes || !mensaje) {
                        alert('Por favor, complete todos los campos del formulario.');
                        return;
                    }
                    
                    // Construir mensaje para WhatsApp
                    let whatsappMessage = `Hola, soy ${nombre}. Estoy interesado en: ${interes}.\n\n` +
                                        `Mis datos:\n` +
                                        `Email: ${email}\n` +
                                        `Teléfono: ${telefono}\n` +
                                        `Ubicación: ${localidad}, ${provincia}\n\n` +
                                        `Mensaje: ${mensaje}`;
                    
                    // Codificar el mensaje para la URL
                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    
                    // Crear enlace de WhatsApp
                    const whatsappLink = `https://wa.me/5492657545964?text=${encodedMessage}`;
                    
                    // Enviar mensaje por correo
                    const emailSubject = `Consulta desde GenPorc: ${interes}`;
                    let emailBody = `Nombre: ${nombre}%0A` +
                                `Email: ${email}%0A` +
                                `Teléfono: ${telefono}%0A` +
                                `Ubicación: ${localidad}, ${provincia}%0A` +
                                `Interés: ${interes}%0A%0A` +
                                `Mensaje: ${mensaje}`;
                    
                    const emailLink = `mailto:leandrodegan7@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
                    
                    // Abrir WhatsApp en nueva pestaña
                    window.open(whatsappLink, '_blank');
                    
                    // Abrir cliente de correo
                    window.location.href = emailLink;
                    
                    // Mostrar notificación
                    notification.style.display = 'block';
                    
                    // Ocultar notificación después de 5 segundos
                    setTimeout(() => {
                        notification.style.display = 'none';
                    }, 5000);
                    
                    // Resetear formulario
                    contactForm.reset();
                });
            }
            
            // Botones de "Solicitar Info" en tarjetas
            const solicitarBtns = document.querySelectorAll('.solicitar-btn');
            solicitarBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Obtener título del producto
                    const cardTitle = this.closest('.card').querySelector('.card-title').textContent;
                    
                    // Redirigir a contacto con información prefilled
                    window.location.href = '#contactForm';
                    
                    // Prellenar el campo de interés
                    setTimeout(() => {
                        document.getElementById('interes').value = cardTitle;
                        document.getElementById('mensaje').value = `Estoy interesado en obtener más información sobre: ${cardTitle}`;
                    }, 300);
                });
            });
        });
 document.addEventListener('DOMContentLoaded', function() {
            // Botones de compra
            document.querySelectorAll('.buy-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    const id = this.getAttribute('data-id');
                    const pigCard = document.getElementById(`${category}-${id}`);
                    
                    // Deshabilitar la tarjeta del cerdo
                    pigCard.classList.add('disabled');
                    
                    // Crear mensaje para WhatsApp
                    const whatsappMessage = `Hola, estoy interesado en comprar el padrillo ${id} de la categoría ${category}. Por favor, contácteme para continuar con el proceso.`;
                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    const whatsappLink = `https://wa.me/5492657545964?text=${encodedMessage}`;
                    
                    // Abrir WhatsApp
                    window.open(whatsappLink, '_blank');
                });
            });
            
            // Código existente para el formulario de contacto
            const contactForm = document.getElementById('contactForm');
            const notification = document.querySelector('.notification');
            
            if (contactForm && notification) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // ... código existente para el formulario ...
                });
            }
        });