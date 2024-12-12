const problem =  (char, string)=>{
    let chars = string.split('')
    console.log(chars)
    let count = 0
    for(let i =0; i<chars.length; i++){
        if(chars[i]==char){
            count = count+1
        }
    }
    return count
}

const inputChar = "m"
const inputString = "programming"

console.log(problem(inputChar, inputString))