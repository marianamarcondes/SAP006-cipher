const characters = 33;
const maxCharacters = 237;

const cipher = {
encode: function(offset, string){
  let message = "";  

  if(string == "" || string == null || offset == "" || offset == null){   
    throw new TypeError('Some informations are missing:', 'cipher.js', 8);}

  for (let i = 0; i < string.length; i++) { 
                                          
      let code = string.charCodeAt(i);  
      
      if (string.charCodeAt(i) == 32 ) {   
        message += string.charAt(i);}  
                                      
      if(code >= characters && code <= maxCharacters){ 
        message += String.fromCharCode((code - characters + offset) %205 + characters);
      }                                  
        }
    return message; 
    },
    
decode: function(offset, string){
  let message = "";
  
  if(string == "" || string == null || offset == "" || offset == null){
    throw new TypeError('Some informations are missing:', 'cipher.js', 29);}

  for (let i = 0; i < string.length; i++) {
      let code = string.charCodeAt(i);

      if (string.charCodeAt(i) == 32 ) {      
      message += string.charAt(i);}

      if(code >= characters && code <= maxCharacters){
        message += String.fromCharCode((code - characters - offset) %205 + characters);
          }
          }
    return message;
    }
  }                                                                                 
         
export default cipher;

  

  