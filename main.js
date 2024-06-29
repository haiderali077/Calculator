document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.calculator-display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.querySelector('.clear-row .btn');

    const operators = ["+", "-", "/", "*"];
    let inputs = [];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                display.value = '';
                inputs = [];
                return; // No change
            }

            if (inputs.length === 0 && (operators.includes(buttonText) || buttonText === '=')) {
                display.value = 'error'; // Highlight: Display 'error' when operators or '=' are clicked with empty inputs
                return;
            }

            display.value += buttonText;
            inputs.push(buttonText);

            if (buttonText === '=') {
                let Array = [];
                let num1 = "";

                for (let i = 0; i < inputs.length; i++) {
                    if (operators.includes(inputs[i]) || (i === inputs.length - 1 && buttonText === "=")) {
                        Array.push(parseInt(num1)); // Highlight: Parse num1 to integer before pushing to Array
                        num1 = "";
                        if (operators.includes(inputs[i])) {
                            Array.push(inputs[i]);
                        }
                    } else {
                        num1 += inputs[i];
                    }
                }

                let result = Array[0];

                for (let i = 1; i < Array.length - 1; i += 2) {


                    switch (Array[i]) {
                        case '+':
                            result += Array[i + 1];
                            break;
                        case '-':
                            result -= Array[i + 1];
                            break;
                        case '*':
                            result *= Array[i + 1];
                            break;
                        case '/':
                            if (Array[i + 1] !== 0) {
                                result /= Array[i + 1];
                                } else {
                                    result = "nice try "; 
                                }
                            break;
                        default:
                            break;
                    }
                }

                display.value = result; // Highlight: Display the calculated result
            }
        });
    });
});
