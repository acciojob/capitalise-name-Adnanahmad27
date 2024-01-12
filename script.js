 function convertToUppercase() {
            // Get the input element
            var inputElement = document.getElementById("fname");

            // Convert the entered text to uppercase
            inputElement.value = inputElement.value.toUpperCase();
        }

        // Add event listener to the input field
        document.getElementById("fname").addEventListener("blur",convertToUppercase);
    
    