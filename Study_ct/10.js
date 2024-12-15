// const problem = (password)=>{
//     if(password.length<8){
//         return false
//     }

//     let hasLower=false
//     let hasUpper=false
//     let hasDigit=false
//     let hasSpecial=false

//     for(const char of password){
//         if(char>='a' && char<='z'){
//             hasLower=true
//         }else if(char>='A' && char<='Z'){
//             hasUpper=true
//         }else if(char>='0' && char<='9'){
//             hasDigit=true
//         }else if(!(char>='a' && char<='z') && !(char>='A' && char<='Z') && !(char>='0' && char<='9')){
//             hasSpecial=true
//         }
//     }
//     return hasLower&&hasUpper&&hasDigit&&hasSpecial
// }


const password = "Password1"
console.log(problem(password))