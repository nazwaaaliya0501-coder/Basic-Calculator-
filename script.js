function calculate(operator) {

    const number1 = parseFloat(
        document.getElementById("number1").value
    );

    const number2 = parseFloat(
        document.getElementById("number2").value
    );

    const resultElement = document.getElementById("result");

    // Check if both inputs are filled
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Please enter both numbers.";
        return;
    }

    // Prevent division by zero
    if (operator === "/" && number2 === 0) {
        resultElement.textContent = "Cannot divide by zero.";
        return;
    }

    let result;

    if (operator === "+") {
        result = number1 + number2;
    }

    else if (operator === "-") {
        result = number1 - number2;
    }

    else if (operator === "*") {
        result = number1 * number2;
    }

    else if (operator === "/") {
        result = number1 / number2;
    }

    resultElement.textContent = result;
}


function clearCalculator() {

    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";

    document.getElementById("result").textContent = "-";
}