function encryptMessage() {
    // Get the message and key from the user
    const plainText = document.getElementById('plainText').value;
    const key = document.getElementById('encryptionKey').value;
    
    const encryptedOutput = document.getElementById('encryptedOutput');

    // Basic validation
    if (!plainText || !key) {
        encryptedOutput.textContent = "Please enter both a message and a key.";
        return;
    }

    try {
        // Encrypt the message using CryptoJS.AES.encrypt
        const encrypted = CryptoJS.AES.encrypt(plainText, key);
        
        // The encrypted data is a special object, so we convert it to a string for display/storage.
        const encryptedString = encrypted.toString();

        // Display the encrypted string in the designated area
        encryptedOutput.textContent = encryptedString;
        
        console.log("Encryption successful.");
        console.log("Plain Text:", plainText);
        console.log("Key:", key);
        console.log("Encrypted Output:", encryptedString);

    } catch (e) {
        // Handle any errors that might occur during encryption
        encryptedOutput.textContent = "An error occurred during encryption.";
        console.error("Encryption failed:", e);
    }
}