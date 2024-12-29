 const nameInput = document.getElementById('name');
 const emailInput = document.getElementById('email');
 const messageInput = document.getElementById('message');

 const previewName = document.getElementById('previewName');
 const previewEmail = document.getElementById('previewEmail');
 const previewMessage = document.getElementById('previewMessage');

 nameInput.addEventListener('input', function() {
     previewName.textContent = nameInput.value || '[Your name will appear here]';
 });

 emailInput.addEventListener('input', function() {
     previewEmail.textContent = emailInput.value || '[Your email will appear here]';
 });

 messageInput.addEventListener('input', function() {
     previewMessage.textContent = messageInput.value || '[Your message will appear here]';
 });