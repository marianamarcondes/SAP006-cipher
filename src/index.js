import cipher from './cipher.js';

const codeButton = document.getElementById("encrypt"); 
    function encryptMessage() { 
        const offset = Number(document.getElementById("offset").value); 
        let string = document.getElementById("text").value;      
        const encrypted = cipher.encode(offset, string); 
            document.getElementById("code").value = encrypted; 
                                }
    codeButton.addEventListener("click", encryptMessage); 

const decButton = document.getElementById("decrypt");
    function decryptMessage() { 
        const offset = Number(document.getElementById("offset").value); 
        let string = document.getElementById("code").value;
        const decrypted = cipher.decode(offset, string);
            document.getElementById("text").value = decrypted; 
    }
    decButton.addEventListener("click", decryptMessage); 
    


console.log(cipher);