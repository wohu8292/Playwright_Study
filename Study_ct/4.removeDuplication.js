
const removeDuplication = (string)=>{
    return [...new Set(string)].join('')
}

const input = "sdfjklsdfjklsdfjkl"
console.log(removeDuplication(input))