// Retrieve form data from localStorage
const data = JSON.parse(localStorage.getItem('formData') || '{}');
document.getElementById('firstName').textContent = data.firstName || '';
document.getElementById('lastName').textContent = data.lastName || '';
document.getElementById('email').textContent = data.email || '';
document.getElementById('mobile').textContent = data.mobile || '';
document.getElementById('orgTitle').textContent = data.orgTitle || '';
document.getElementById('organization').textContent = data.organization || '';
document.getElementById('membership').textContent = data.membership || '';
document.getElementById('description').textContent = data.description || '';
document.getElementById('timestamp').textContent = data.timestamp || '';

