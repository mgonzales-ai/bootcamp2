const promptTEM = require("prompt-sync")({ sigint: true });
const celsiusmin=-273.15;


while (true){
console.log("Choose an option for temperature convertion:");
    console.log("1=Celsius to Kelvin");
    console.log("2=Kelvin to Celsius");
    console.log("3= Exit ");

    const inputTemp = prompt("Enter the temperature value: ");
    const temperature = Number(inputTemp);

    const option = prompt("Enter your choice (1, 2, or 3): ");
      if (option === '1') {
            // Celsius to Kelvin conversion
            if (temperature < celsiusmin) { // Validate minimum Celsius value
                console.log(`Error: Temperature cannot be below absolute zero (-273.15°C).`);
                continue; // Restart the loop
            }
            const convertedTemp = temperature+273.15;
            console.log(`Result: ${temperature}°C is equal to ${convertedTemp} in K.`);
        } else if (option === '2') {
            // Kelvin to Celsius conversion
            if (temperature < 0) { // Validate minimum Kelvin value
                console.log("Error: Temperature cannot be negative in the Kelvin scale (below 0 K).");
                continue; // Restart the loop
            }
            const convertedTemp = temperature-273.15;
            console.log(`\nResult: ${temperature} K is equal to ${convertedTemp}°C.`);
        } else if (option==='3'){
            console.log("Exit program");
            break;
        }

      }

    