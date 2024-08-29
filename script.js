document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number') || button.classList.contains('operator') || button.classList.contains('decimal')) {
                result.value += button.textContent;
            } else if (button.classList.contains('clear')) {
                result.value = '';
            } else if (button.classList.contains('equals')) {
                try {
                    result.value = eval(result.value.replace('×', '*').replace('÷', '/'));
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (button.classList.contains('percentage')) {
                try {
                    if (result.value) {
                        result.value = parseFloat(result.value) / 100;
                    }
                } catch (error) {
                    result.value = 'Error';
                }
            }
        });
    });
});