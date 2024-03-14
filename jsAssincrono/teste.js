/*
const loginUser = (email, password) => {
    setTimeout(() => {
        console.log('user logged')
        return { email }
    }, 1500)
}

const user = loginUser('felipe@gmail.com', '123456')

console.log({user})
*/

//A função loginUser demora 1,5 segundos para ser executada, com isso o console.log({user}) vai ser undefined,
//pois esse console é executado automaticamente

//Resolução
const loginUser1 = (email, password, callback) => {
    setTimeout(() => {
        console.log('user logged')
        callback({ email })
    }, 2500)
}

const user1 = loginUser1('felipe@gmail.com', '123456', (user) => {
    console.log(user)
})










