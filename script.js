document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    let memory = 0; // Variable to store memory value

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number') || button.classList.contains('decimal')) {
                result.value += button.textContent; // Append numbers and decimals to the display
            } else if (button.classList.contains('clear')) {
                result.value = ''; // Clear the display
            } else if (button.classList.contains('equals')) {
                try {
                    // Evaluate the expression
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = 'Error'; // Handle evaluation errors
                }
            } else if (button.classList.contains('operator')) {
                if (button.textContent === '+') {
                    result.value += '+'; // Append the addition operator
                } else if (button.textContent === '-') {
                    result.value += '-'; // Append the subtraction operator
                } else if (button.textContent === '×') {
                    result.value += '*'; // Append the multiplication operator (using * for eval)
                } else if (button.textContent === '÷') {
                    result.value += '/'; // Append the division operator (using / for eval)
                } else if (button.textContent === '^') {
                    result.value += '**'; // Append the exponentiation operator (using ** for eval)
                } else if (button.textContent === '%') {
                    const value = parseFloat(result.value); // Parse the current value
                    if (!isNaN(value)) {
                        result.value = (value / 100).toString(); // Calculate percentage and update display
                    } else {
                        result.value = 'Error'; // Handle invalid input
                    }
                } else if (button.textContent === '√') {
                    const value = parseFloat(result.value); // Parse the current value
                    if (!isNaN(value) && value >= 0) {
                        result.value = Math.sqrt(value).toString(); // Calculate square root and update display
                    } else {
                        result.value = 'Error'; // Handle invalid input
                    }
                } else if (button.textContent === '∛') {
                    const value = parseFloat(result.value); // Parse the current value
                    if (!isNaN(value) && value >= 0) {
                        result.value = Math.cbrt(value).toString(); // Calculate cube root and update display
                    } else {
                        result.value = 'Error'; // Handle invalid input
                    }
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
});