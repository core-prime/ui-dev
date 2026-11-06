let attempts = 3;
const correctPassword = "secret123";

while (attempts > 0) {
    let password = prompt(`Attempts left: ${attempts}. Enter password:`);

    if (password === correctPassword) {
        console.log("Access granted!");
        break;
    }

    attempts--;
    
    if (attempts === 0) {
        console.log("Access denied. Maximum attempts reached.");
    }
}