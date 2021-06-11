const cipher = {
encode: function(offset, string){

  let message = "";  

  if(string == "" || string == null || offset == "" || offset == null){ 
    alert("Para funcionar precisamos da mensagem e do deslocamento.")  
    throw new TypeError("Some informations are missing:", "cipher.js", 6);
  }
  
  for (let i = 0; i < string.length; i++) { 

    let code = string.charCodeAt(i);  

      if( code >= 65 && code <= 90 ){ 
        message += String.fromCharCode((code - 65 + offset) %26+ 65);}   
      
      else if(code >= 97 && code <= 122){ 
        message += String.fromCharCode((code - 97 + offset) %26 + 97)}
      
      else if (string.charCodeAt(i) == 32){
          message += string.charAt(i)}

      else if (code >= 33 && code <= 64){ 
          message += String.fromCharCode((code - 33 + offset) %33 + 33);}
          
      else if (code >= 91 && code <= 96){ 
          message += String.fromCharCode((code - 91 + offset) %6 + 91);} 
        
      else if (code >= 123 && code <= 254){   
          message += String.fromCharCode((code - 123 + offset) %123 + 123);}
      
             }
      
    return message; } ,
    
decode: function(offset, string){

  let message = "";
  
  if(string == "" || string == null || offset == "" || offset == null){
    throw new TypeError('Some informations are missing:', 'cipher.js', 39);}

  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);

      if(code >= 65 && code <= 90){ 
        message += String.fromCharCode((code - 90 - offset) %26 + 90);}   
      
      else if(code >= 97 && code <= 122){ 
        message += String.fromCharCode((code - 122 - offset) %26 + 122)}

      else if (string.charCodeAt(i) == 32){
         message += string.charAt(i)}

      else if (code >= 33 && code <= 64){ 
        message += String.fromCharCode((code - 64 - offset) %33 + 64);}
        
      else if (code >= 91 && code <= 96){ 
        message += String.fromCharCode((code - 96 - offset) %6 + 96);} 
      
      else if (code >= 123 && code <= 254){   
        message += String.fromCharCode((code - 254 - offset) %123 + 254);} 
         }    
           
    return message;
        }
      }
                                                                                       
export default cipher;

  

  