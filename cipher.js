const cipher = {
encode: function(offset, string){
  let message = "";  

  if(string == "" || string == null || offset == "" || offset == null){   
    throw new TypeError('Some informations are missing:', 'cipher.js', 5);}
  
  for (let i = 0; i < string.length; i++) { 
    let code = string.charCodeAt(i);  

      if(code >= 65 && code <= 90 ){ 
        message += String.fromCharCode((code - 65 + offset) %26+ 65);}   
      
      else if(code >= 97 && code <= 122){ 
        message += String.fromCharCode((code - 97 + offset) %26 + 97)}
      
      else if (code >= 32 && code <= 64 || code >= 91 && code <= 96 || code >= 128 && code <= 237 ) {   
        message += string.charAt(i);} 

             }
      
    return message; } ,
    
decode: function(offset, string){
  let message = "";
  
  if(string == "" || string == null || offset == "" || offset == null){
    throw new TypeError('Some informations are missing:', 'cipher.js', 26);}

  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);

      if(code >= 65 && code <= 90){ 
        message += String.fromCharCode((code - 65 - offset) %26 + 65);}   
      
      else if(code >= 97 && code <= 122){ 
        message += String.fromCharCode((code - 97 - offset) %26 + 97)}
      
      else if (code >= 32 && code <= 64 || code >= 91 && code <= 96 || code >= 128 && code <= 237 ) {   
          message += string.charAt(i);}
          
      }     
    return message;
    }
  }                                                                                 
         
export default cipher;

  

  