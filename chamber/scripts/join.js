function openModal(id){
    dialog = document.getElementById(id);
    dialog.showModal();
}

document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('dialog[open]').forEach(dialog => {
            dialog.close();
        });
    });
});

const timestampElem = document.getElementById('timestamp');
if (timestampElem) {
    const now = new Date();
    timestampElem.value = now.toISOString();
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea, select');
        const formData = {};
        inputs.forEach(input => {
            if (input.name) {
            formData[input.name] = input.value;
            }
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = "thankyou.html";
    });
}