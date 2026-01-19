const generateButton = document.querySelector("#generate");
const exportButton = document.querySelector("#export");
const encryptButton = document.querySelector("#encrypt");
const ciphertextOutput = document.querySelector("#ciphertext");
var key = [];

// just a random number function that ranges from -25 to 25 by default
function getRandomInt(min = -25, max = 25) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shiftLetter(char, shift) {
    // shifts lowercase characters using UTF-8 codes
    if (char >= "a" && char <= "z") {
        shift = Number(shift);
        return String.fromCharCode(
            ((((char.charCodeAt(0) - 97 + shift) % 26) + 26) % 26) + 97
        );
    }

    // shifts uppercase characters using UTF-8 codes
    if (char >= "A" && char <= "Z") {
        shift = Number(shift);
        return String.fromCharCode(
            ((((char.charCodeAt(0) - 65 + shift) % 26) + 26) % 26) + 65
        );
    }

    // return non alpabet characters
    return char;
}

// calls the shiftLetter function for each element in charArray using the values in numArray
function shiftArray(charArray, numArray) {
    return charArray.map((char, i) => {
        const shift = numArray[i % 50];
        return shiftLetter(char, shift);
    });
}

generateButton.addEventListener("click", () => {

    for (let index = 0; index < 50; index++) {
        key[index] = getRandomInt();
    }

    console.log(key);
});

document.getElementById("import").addEventListener("change", event => {
    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();
    
    reader.onload = () => {
        key = reader.result.split(',');
        console.log(key);
    }

    reader.readAsText(file);
})

exportButton.addEventListener("click", () => {
    if (key && key.length) {
        const blob = new Blob([key], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "key.txt";
        a.click();

        URL.revokeObjectURL(url);
    }
})

encryptButton.addEventListener("click", () => {
    const plaintext = Array.from(document.getElementById('plaintext').value);

    if (key && key.length) {
        ciphertextOutput.value = shiftArray(plaintext, key).join('');
        console.log(ciphertextOutput.value);
    }
});