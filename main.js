function convertToFarhenheit() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const fahrenheitOutput = document.getElementById("fahrenheitOutput");

    if (celsiusInput === "") {
        alert("Please enter a value in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;

    fahrenheitOutput.textContent = fahrenheit.toFixed(2);
}
