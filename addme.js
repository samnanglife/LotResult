// Get references to the input and output fields for A2
const a2Inputs = document.querySelectorAll("#a2dinput1, #a2dinput2, #a2dinput3, #a2dinput4");
const a2Outputs = document.querySelectorAll("#a2output1, #a2output2, #a2output3, #a2output4");

// Get references to the input and output fields for A3
const a3Inputs = document.querySelectorAll("#a3dinput1, #a3dinput2, #a3dinput3");
const a3Outputs = document.querySelectorAll("#a3output1, #a3output2, #a3output3");

// Function to handle Enter key press
function handleEnterKey(event, inputs, outputs) {
    if (event.key === "Enter") {
        inputs.forEach((input, index) => {
            outputs[index].textContent = input.value;
            localStorage.setItem(input.id, input.value);
        });
    }
}

// Add event listeners for A2 and A3
a2Inputs.forEach((input) => input.addEventListener("keydown", (event) => handleEnterKey(event, a2Inputs, a2Outputs)));
a3Inputs.forEach((input) => input.addEventListener("keydown", (event) => handleEnterKey(event, a3Inputs, a3Outputs)));

// Script for B
////////////////////////

// Get reference to the input field (B) and output fields for C and D
const bInput = document.querySelector("#postb");
const bOutputs = document.querySelectorAll("#boutput1, #boutput2");
const cOutputs = document.querySelectorAll("#coutput1, #coutput2");
const dOutputs = document.querySelectorAll("#doutput1, #doutput2");

// Function to handle Enter key press for B
function handleEnterKeyB(event) {
    if (event.key === "Enter") {
        const firstTwoB = bInput.value.slice(0, 2);
        const lastThreeB = bInput.value.slice(2);

        // Update the output cells for B
        bOutputs[0].textContent = firstTwoB;
        bOutputs[1].textContent = lastThreeB;

        // For C, reverse the order: last two characters in column 1, first three in column 2
        const lastTwoC = bInput.value.slice(3);
        const firstThreeC = bInput.value.slice(0, 3);

        // Update the output cells for C
        cOutputs[0].textContent = lastTwoC;
        cOutputs[1].textContent = firstThreeC;

        // For D, concatenate the first and last letters
        const firstLetterD = bInput.value.charAt(0);
        const lastLetterD = bInput.value.charAt(4);

        // Update the output cells for D
        dOutputs[0].textContent = firstLetterD + lastLetterD;

        // Get the 2nd three characters of the input
        const secondThreeD = bInput.value.slice(1, 4);
        dOutputs[1].textContent = secondThreeD;
    }
}

// Add event listener for B
bInput.addEventListener("keydown", handleEnterKeyB);
