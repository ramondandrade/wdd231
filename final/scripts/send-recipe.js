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