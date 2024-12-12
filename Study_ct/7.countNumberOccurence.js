const problem = (start, end)=>{
    let count = 0

    for(let i=start; i<end; i++){
        const strNum = i.toString() 
        for(const char of strNum){
            if(char==="3"){
                count++
            }
        }
    }

    return count
}

const start = 30
const end = 35

console.log(problem(start, end))