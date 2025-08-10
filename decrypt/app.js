

    function decryptText() {
        //Get the encrypted data from the HTML
        const encryptedData = document.getElementById('encryptedText').value;
        //Get the key from the user input
         const key = document.getElementById('decryptionKey').value;
        //Perform decryption using Crypto-JS
         try {
            const bytes  = CryptoJS.AES.decrypt(encryptedData, key);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        //Display the decrypted text
            document.getElementById('decryptedResult').innerText = decryptedText
        } catch (e) {
        //Handle errors (e.g., incorrect key)
            document.getElementById('decryptedResult').innerText = "Error: Invalid key or corrupted data.";
            console.error("Decryption failed:", e);
        }
    }