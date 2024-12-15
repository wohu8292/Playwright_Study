// const problem = (input)=>{
//     const fullRange = []
//     const missingNumber = []

//     for(let i = Math.min(...input); i <= Math.max(...input); i++){
//         fullRange.push(i)
//     }

//     for(const num of fullRange){
//         if(!input.includes(num)){
//             missingNumber.push(num)
//         }
//     }

//     return missingNumber
// }

const problem = (input)=>{
    const fullRange = []
    const missingNumber = []

    for(let i = Math.min(...input); i <= Math.max(...input); i++){
        fullRange.push(i)
    }

    for(numb of fullRange){
        if(!input.includes(numb)){
            missingNumber.push(numb)
        }
    }

    return missingNumber
}

const input = [1,2,3,4,5,7,8,9]
console.log(problem(input))