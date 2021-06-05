const characters = 32;
const maxCharacters = 237;

const cipher = {
encode: function(offset, string){
  let message = "";

    for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if(code >= characters && code <= maxCharacters){
        message += String.fromCharCode((code - characters + offset) %205 + characters);}
      else { code += string.charAt(i);
      }
      }
    return message;
    },
    
decode: function(offset, string){
  let message = "";

    for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if(code >= characters && code <= maxCharacters){
        message += String.fromCharCode((code - characters - offset) %205 + characters);}
      else { code += string.charAt(i);
           }
           }
    return message;
    }
    }
                                                                           
              
         
export default cipher;

  

  