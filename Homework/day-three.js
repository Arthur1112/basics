
function makePyramid(brick, x){
    for(let i = 0; i <= x; i++){
        console.log(brick.repeat(i))
    }
}
makePyramid('#', 6)

function assignGrade(x){
    if(x > 89.99){
        let grade = 'A'
        return grade
    } else if(x > 79.99) {
            let grade = 'B'
            return grade
    } else if(x > 69.99){
        let grade = 'C'
        return grade
    } else if(x > 59.99){
        let grade = 'D'
        return grade
     } else {
         let grade = 'F'
         return grade
     }
}
console.log("Your final grade is an", assignGrade(92))
console.log("Your final grade is an", assignGrade(82))
console.log("Your final grade is an", assignGrade(73))
console.log("Your final grade is an", assignGrade(63))
console.log("Your final grade is an", assignGrade(53))