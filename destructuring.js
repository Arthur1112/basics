const student = {
    fistName: 'Wade',
    shirt: 'magenta',
    hair: 'red',
    glasses: true,
    height: 74,
}

const { fistName, hair} = student

console.log(fistName, hair)

const alumni = ['Ashley', 'Peter', 'Sebas', 'Zhuopu', 'Aurelie', "Matt"]

const [first, second, third] = alumni

console.log(third, first)
