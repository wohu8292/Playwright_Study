// const problem = (input)=>{
//     let words = input.split(' ')
//     let reversedWord = words.map(word=>word.split('').reverse().join(''))
//     return reversedWord.join(' ')
//     }

const problem = (input)=>{
    let words = input.split(' ')
    let reversedWord = words.map(word=>word.split('').reverse().join(''))
    return reversedWord.join(' ')
}

const input = "Hello World"
console.log(problem(input))