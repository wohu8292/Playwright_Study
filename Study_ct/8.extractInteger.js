const problem = (input)=>{
    let result = []

    for(char of input){
        if(char !== ' ' && !isNaN(char)){
            char = parseInt(char)
            result.push(char)
        }
    }

    return result
}

const input = "he33llo 42"
console.log(problem(input))