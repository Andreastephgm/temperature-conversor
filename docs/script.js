function convertTemperature(){
    const value = parseFloat(document.getElementById("temperature").value); 
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    let result;

    if(isNaN(value)){
        result = "Please enter a valid number!";
    } else {
        let celsius;

        switch (from) {
            case "celsius":
                celsius = value;
                break;
            case "fahrenheit":
                celsius = (value - 32) * 5 / 9;
                break;
            case "kelvin":
                celsius = value - 273.15;
                break;
            default:
                celsius = NaN;
                break;
        }

        switch (to) {
            case "celsius":
                result = celsius;
                break;
            case "fahrenheit":
                result = (celsius * 9 / 5) + 32;
                break;
            case "kelvin":
                result = celsius + 273.15;
                break;
            default:
                result = NaN;
                break;
        }

        result = `${value}° ${from} = ${result.toFixed(2)}° ${to}`;
    }

    document.getElementById("result").textContent = result; 
}