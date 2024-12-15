const problem = (input)=>{
    const sorted = input.sort()
    return sorted[1]
}

let input = [7,5,6,1,4,2]
console.log(problem(input))