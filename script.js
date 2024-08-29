document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    let memory = 0; // Variable to store memory value

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number') || button.classList.contains('operator') || button.classList.contains('decimal')) {
                result.value += button.textContent;
            } else if (button.classList.contains('clear')) {
                result.value = '';
            } else if (button.classList.contains('equals')) {
                try {
                    // Handle exponentiation and evaluate the expression
                    result.value = eval(result.value.replace('×', '*').replace('÷', '/').replace('^', '**'));
                } catch (error) {
                    result.value = 'Error';
                }
            } else if (button.classList.contains('memory')) {
                if (button.id === 'memory-add') {
                    memory += parseFloat(result.value) || 0; // Add current value to memory
                    result.value = ''; // Clear display after memory operation
                } else if (button.id === 'memory-recall') {
                    result.value = memory; // Recall memory value
                }
            }
        });
    });

    // Dark Mode Toggle
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            buttons.forEach(button => button.classList.toggle('dark-mode'));
        });
    }
});