import cipher from './cipher.js';

const codeButton = document.getElementById("encrypt"); 
    function encryptMessage() { 
        let offset = Number(document.getElementById("offset").value); 
<<<<<<< HEAD
=======
           if (offset < 0) {
            offset = Math.abs(offset);}   
>>>>>>> 5be63f48f43c09d82d3c5775fe913a269dea8f15
        let string = document.getElementById("text").value;      
        const encrypted = cipher.encode(offset, string); 
            document.getElementById("code").value = encrypted; 
        if (offset < 0) {
          let encodeNegative = cipher.encode((-offset), string)
            document.getElementById("code").value = encodeNegative}
                         }                    
    codeButton.addEventListener("click", encryptMessage); 

const decButton = document.getElementById("decrypt");
    function decryptMessage() { 
        let offset = Number(document.getElementById("offset").value); 
        let string = document.getElementById("code").value;
        const decrypted = cipher.decode(offset, string);
            document.getElementById("text").value = decrypted; 
        if (offset < 0) {
          let decodeNegative = cipher.decode((-offset), string)
            document.getElementById("text").value = decodeNegative}
                        }
    decButton.addEventListener("click", decryptMessage); 
    


//console.log(cipher);
